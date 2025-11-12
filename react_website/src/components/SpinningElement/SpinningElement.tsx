import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { useSpring, animated, easings } from '@react-spring/web'
import './spinning-element.scss'

/**
 * RollingDahlia (generic spinner)
 * - Spins ANY content (an <img> or your own children)
 * - You can fully control start/pause from props OR imperatively via ref
 * - Optional hover-to-pause
 *
 * Usage (uncontrolled):
 *   <RollingDahlia src="/flower.png" autoStart />
 *
 * Usage (controlled):
 *   const [running, setRunning] = useState(false)
 *   <RollingDahlia running={running} onRunningChange={setRunning} />
 *
 * Usage (imperative):
 *   const ref = useRef<SpinningElement>(null)
 *   ref.current?.start(); ref.current?.stop(); ref.current?.setSpeed(4000)
 */

export type SpinningElement = {
    start: () => void;
    stop: () => void;
    toggle: () => void;
    reset: () => void; // jump back to 0deg
    setSpeed: (msPerRevolution: number) => void;
    setDirection: (dir: 1 | -1) => void;
}

export interface RollingDahliaProps {
    /** Provide an image or pass children */
    src?: string;
    alt?: string;
    children?: React.ReactNode;

    /** ms for one full revolution */
    duration?: number; // default 8000
    /** direction: 1 = clockwise, -1 = counter-clockwise */
    direction?: 1 | -1; // default 1

    /** Start animation on mount (for uncontrolled mode) */
    autoStart?: boolean; // default true
    /** Pause when mouse is over the component */
    pauseOnHover?: boolean; // default false

    /** Controlled mode */
    running?: boolean; // when provided, overrides internal state
    onRunningChange?: (running: boolean) => void;

    /** Accessibility / class */
    className?: string;
    ariaLabel?: string;
}

const DEFAULT_DURATION = 8000;

const RollingDahlia = forwardRef<SpinningElement, RollingDahliaProps>(
    (
        {
            src,
            alt = '',
            children,
            duration = DEFAULT_DURATION,
            direction = 1,
            autoStart = true,
            pauseOnHover = false,
            running: runningProp,
            onRunningChange,
            className,
            ariaLabel = 'spinning object',
        },
        ref
    ) => {
        // internal state when uncontrolled
        const [internalRunning, setInternalRunning] = useState<boolean>(autoStart)
        const isControlled = useMemo(() => runningProp !== undefined, [runningProp])
        const running = isControlled ? !!runningProp : internalRunning

        const currentDurationRef = useRef(Math.max(400, duration))
        const dirRef = useRef<1 | -1>(direction)

        // spring for rotation
        const [styles, api] = useSpring(() => ({ rotate: 0 }))

        // function to (re)start loop from current angle
        const startLoop = () => {
            api.start({
                from: { rotate: 0 },
                to:   { rotate: 360 },            // or -360 for CCW
                loop: { reset: true },            // repeat from 'from' each time
                config: { duration: currentDurationRef.current, easing: easings.linear },
            });
        };

        const stopLoop = () => { api.stop() }

        // respond to running state
        useEffect(() => {
            if (running) {
                startLoop()
            } else {
                stopLoop()
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [running]);

        // update loop speed or direction on change
        useEffect(() => {
            currentDurationRef.current = Math.max(400, duration)
            dirRef.current = direction
            if (running) {
                // restart to apply new config cleanly
                stopLoop()
                startLoop()
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [duration, direction]);

        // imperative API
        useImperativeHandle(
            ref,
            (): SpinningElement => ({
                start: () => setRunning(true),
                stop: () => setRunning(false),
                toggle: () => setRunning((r) => !r),
                reset: () => api.set({ rotate: 0 }),
                setSpeed: (ms) => {
                    currentDurationRef.current = Math.max(400, ms);
                    if (getRunning()) {
                        stopLoop()
                        startLoop()
                    }
                },
                setDirection: (dir) => {
                    dirRef.current = dir;
                    if (getRunning()) {
                        stopLoop()
                        startLoop()
                    }
                },
            }),
            []
        )

        // helpers to bridge controlled/uncontrolled
        const getRunning = () => (isControlled ? !!runningProp : internalRunning)
        const setRunning = (val: boolean | ((v: boolean) => boolean)) => {
            if (isControlled) {
                const next = typeof val === 'function' ? (val as (v: boolean) => boolean)(!!runningProp) : val
                onRunningChange?.(next)
            } else {
                setInternalRunning(val as boolean)
            }
        }

        return (
            <div
                className={`RollingDahlia ${className ?? ''}`}
                role="img"
                aria-label={ariaLabel}
                onMouseEnter={pauseOnHover ? () => setRunning(false) : undefined}
                onMouseLeave={pauseOnHover ? () => setRunning(true) : undefined}
            >
                <animated.div
                    className="RollingDahlia__content"
                    style={{ rotate: styles.rotate.to((r) => `${r}deg`) }}
                >
                    {src ? (
                        <img src={src} alt={alt} className="RollingDahlia__img" draggable={false} />
                    ) : (
                        children
                    )}
                </animated.div>
            </div>
        )
    }
)

RollingDahlia.displayName = 'RollingDahlia'
export default RollingDahlia
