// Lets TypeScript accept plain stylesheet imports such as `import './page.scss'`.
// Create React App only declares CSS Modules (`*.module.scss`), and newer TypeScript
// versions (the one built into VS Code) report side-effect imports they can't resolve.
declare module '*.scss'
declare module '*.sass'
declare module '*.css'
