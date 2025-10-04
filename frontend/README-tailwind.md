Tailwind instructions

- Building CSS locally (this project uses Tailwind v4 with the @tailwindcss/postcss plugin):

  npm run build:css

- Start dev server (build step runs automatically before Next.js starts):

  npm run dev

Notes:
- If your editor shows "Unknown at rule @tailwind", install the Tailwind CSS IntelliSense extension for VS Code and ensure workspace settings allow PostCSS rules (see `.vscode/settings.json`).
