const esbuild = require('esbuild')
const fs = require('fs')
const path = require('path')

// Get all component files
const srcDir = path.join(__dirname, 'src')
const distDir = path.join(__dirname, 'dist/importmap')

// Ensure dist/importmap directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// Get all component files
const componentFiles = fs
  .readdirSync(srcDir)
  .filter(file => file.startsWith('railsui_') && file.endsWith('.js'))

// Build each component individually without bundling
const buildPromises = componentFiles.map(file => {
  const inputPath = path.join(srcDir, file)
  const outputPath = path.join(distDir, file)

  return esbuild.build({
    entryPoints: [inputPath],
    format: 'esm',
    target: 'es2020',
    outfile: outputPath,
    sourcemap: true,
  })
})

// Also build the index file
buildPromises.push(
  esbuild.build({
    entryPoints: [path.join(srcDir, 'index.js')],
    format: 'esm',
    target: 'es2020',
    outfile: path.join(distDir, 'index.js'),
    sourcemap: true,
  })
)

Promise.all(buildPromises)
  .then(() => {
    console.log('✅ Importmap build complete!')
  })
  .catch(err => {
    console.error('❌ Build failed:', err)
    process.exit(1)
  })
