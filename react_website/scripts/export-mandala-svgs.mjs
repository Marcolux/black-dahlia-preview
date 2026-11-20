// Exports the Black Dahlia mandala as standalone SVG files for branding use.
// Run from react_website:  node scripts/export-mandala-svgs.mjs
// Output: brand/mandala/*.svg
//
// The petal shape is copied from src/components/Mandala/MandalaDahlia.tsx.
// If you change the petal there, change it here too.

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'brand', 'mandala')

// ---- Shape (same as MandalaDahlia.tsx) ----
const PETAL_OUTLINE =
    'M0 -44.4 C0 -44.4 -11.5 -32.1 -9.85 -19.3 C-8.8 -11 0 0 0 0 ' +
    'C0 0 8.8 -11 9.85 -19.3 C11.5 -32.1 0 -44.4 0 -44.4 Z'
const PETAL_MIDRIB = 'M0 -44.4 V0'
const PETAL_VEINS =
    'M-7.75 -18.9 C-5.53 -16.25 -3.86 -13.16 -2.82 -9.88 C-1.85 -6.61 -0.26 -3.44 0 0 ' +
    'M7.75 -18.9 C5.53 -16.25 3.86 -13.16 2.82 -9.88 C1.85 -6.61 0.26 -3.44 0 0'
const PETAL_COUNT = 16

// Line widths: outline, midrib (x0.5), veins (x0.2)
const WIDTH = 0.4

// ---- Brand colors ----
const BRAND = {
    porcelain: '#eadfd9',
    blackberry: '#1f1d1d',
    apricot: '#df9b57',
    orchid: '#be508f',
    cobalt: '#3a4c97',
}

// Petal colors for the multicolor versions: petal 0 points up, then clockwise.
// 4 colors x 4 repeats keeps the mandala symmetric.
const BRAND_CYCLE = ['apricot', 'orchid', 'cobalt', 'blackberry']

// Size the file opens at; it's vector, so it scales to any size.
const SIZE = 1024

// ---- Builders ----
const rotate = (i) => `rotate(${i * (360 / PETAL_COUNT)})`
const range = Array.from({ length: PETAL_COUNT }, (_, i) => i)
const cycle = (i) => BRAND[BRAND_CYCLE[i % BRAND_CYCLE.length]]

// Fade from light at the petal tip to solid at the center.
// userSpaceOnUse follows each petal's rotation, so one gradient per color works for all petals.
const fadeGradient = (name, color = BRAND[name], from = 0.15, to = 1) => `
    <linearGradient id="fade-${name}" gradientUnits="userSpaceOnUse" x1="0" y1="-44.4" x2="0" y2="0">
      <stop offset="0" stop-color="${color}" stop-opacity="${from}"/>
      <stop offset="1" stop-color="${color}" stop-opacity="${to}"/>
    </linearGradient>`

// Single-color fades for the white-line versions: [file suffix, color, tip opacity, center opacity].
// porcelain-light matches the "fade-porcelain-light" gradient in public/images/icons/mandala_dahlia_half_black.svg.
const SINGLE_FADES = [
    ['porcelain', BRAND.porcelain, 0.15, 1],
    ['porcelain-light', BRAND.porcelain, 0, 0.5],
    ['blackberry', BRAND.blackberry, 0.15, 1],
    ['apricot', BRAND.apricot, 0.15, 1],
    ['orchid', BRAND.orchid, 0.15, 1],
    ['cobalt', BRAND.cobalt, 0.15, 1],
]
const WHITE = '#ffffff'

// Fills go in one layer under all the lines, so every overlapping outline stays visible.
const build = ({ title, stroke, fill, defs = '' }) => {
    const strokeOf = (i) => (typeof stroke === 'function' ? stroke(i) : stroke)
    const fillOf = (i) => (typeof fill === 'function' ? fill(i) : fill)

    const fills = fill === 'none' ? '' : `
  <g id="fills" stroke="none">${range.map((i) => `
    <path id="fill-${i + 1}" transform="${rotate(i)}" d="${PETAL_OUTLINE}" fill="${fillOf(i)}"/>`).join('')}
  </g>`

    const lines = `
  <g id="lines" fill="none" stroke-linecap="round" stroke-linejoin="round">${range.map((i) => `
    <g id="petal-${i + 1}" transform="${rotate(i)}" stroke="${strokeOf(i)}">
      <path d="${PETAL_OUTLINE}" stroke-width="${WIDTH}"/>
      <path d="${PETAL_MIDRIB}" stroke-width="${+(WIDTH * 0.5).toFixed(3)}"/>
      <path d="${PETAL_VEINS}" stroke-width="${+(WIDTH * 0.2).toFixed(3)}"/>
    </g>`).join('')}
  </g>`

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-46 -46 92 92" width="${SIZE}" height="${SIZE}">
  <title>${title}</title>${defs ? `\n  <defs>${defs}\n  </defs>` : ''}${fills}${lines}
</svg>
`
}

const variants = {
    'mandala-dahlia-blackberry-porcelain.svg': build({
        title: 'Black Dahlia mandala: blackberry fills, porcelain lines',
        stroke: BRAND.porcelain,
        fill: BRAND.blackberry,
    }),
    'mandala-dahlia-porcelain-blackberry.svg': build({
        title: 'Black Dahlia mandala: porcelain fills, blackberry lines',
        stroke: BRAND.blackberry,
        fill: BRAND.porcelain,
    }),
    'mandala-dahlia-brand-strokes.svg': build({
        title: 'Black Dahlia mandala: one brand color per petal, no fill',
        stroke: cycle,
        fill: 'none',
    }),
    'mandala-dahlia-porcelain-fade.svg': build({
        title: 'Black Dahlia mandala: porcelain lines, fading brand color fills',
        stroke: BRAND.porcelain,
        fill: (i) => `url(#fade-${BRAND_CYCLE[i % BRAND_CYCLE.length]})`,
        defs: BRAND_CYCLE.map((name) => fadeGradient(name)).join(''),
    }),
    // One per brand color, every petal fading in that color:
    //   white lines for dark backgrounds, blackberry lines for light backgrounds
    ...Object.fromEntries([['white', WHITE], ['blackberry', BRAND.blackberry]].flatMap(([lineName, lineColor]) =>
        SINGLE_FADES.map(([name, color, from, to]) => [
            `mandala-dahlia-${lineName}-fade-${name}.svg`,
            build({
                title: `Black Dahlia mandala: ${lineName} lines, fading ${name} fills`,
                stroke: lineColor,
                fill: `url(#fade-${name})`,
                defs: fadeGradient(name, color, from, to),
            }),
        ]))),
    // Lines only: no background, petals fully transparent
    'mandala-dahlia-blackberry-lines.svg': build({
        title: 'Black Dahlia mandala: blackberry lines, transparent petals',
        stroke: BRAND.blackberry,
        fill: 'none',
    }),
    'mandala-dahlia-porcelain-lines.svg': build({
        title: 'Black Dahlia mandala: porcelain lines, transparent petals',
        stroke: BRAND.porcelain,
        fill: 'none',
    }),
}

mkdirSync(OUT_DIR, { recursive: true })
for (const [file, content] of Object.entries(variants)) {
    writeFileSync(join(OUT_DIR, file), content)
    console.log('wrote', join('brand', 'mandala', file))
}
