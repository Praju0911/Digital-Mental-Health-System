#!/usr/bin/env node
// Build Tailwind CSS using the installed tailwindcss JS API (v4+ exports importable functions)
const fs = require('fs');
const path = require('path');

async function run() {
  try {
  const tailwind = require('tailwindcss');
  const postcss = require('postcss');
  const autoprefixer = require('autoprefixer');

    const inputPath = path.join(process.cwd(), 'src', 'app', 'globals.css');
    const outDir = path.join(process.cwd(), '.next', 'static', 'css');
    const outPath = path.join(outDir, 'tailwind.css');

    if (!fs.existsSync(inputPath)) {
      console.error('globals.css not found at', inputPath);
      process.exit(2);
    }
    const css = fs.readFileSync(inputPath, 'utf8');

  const processor = postcss([tailwind, autoprefixer]);
    const result = await processor.process(css, { from: inputPath });

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outPath, result.css, 'utf8');
    console.log('Wrote', outPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
