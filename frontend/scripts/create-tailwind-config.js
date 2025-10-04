#!/usr/bin/env node
// Minimal script to create a tailwind config + ensure postcss config exists
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

function writeIfMissing(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Created', filePath);
  } else {
    console.log('Exists', filePath);
  }
}

const tailwindCjs = `module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { extend: {} },
  plugins: [],
};
`;

const postcss = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;

writeIfMissing(path.join(cwd, 'tailwind.config.cjs'), tailwindCjs);
writeIfMissing(path.join(cwd, 'postcss.config.js'), postcss);

console.log('Done');
