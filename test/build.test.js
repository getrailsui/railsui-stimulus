/**
 * Build Output Tests
 *
 * These tests verify that all build outputs are generated correctly
 * and have the expected structure for both bundled and importmap builds.
 */

const fs = require('fs')
const path = require('path')

// ANSI colors for test output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
}

let passedTests = 0
let failedTests = 0

function assert(condition, testName) {
  if (condition) {
    console.log(`${colors.green}✓${colors.reset} ${testName}`)
    passedTests++
  } else {
    console.log(`${colors.red}✗${colors.reset} ${testName}`)
    failedTests++
  }
}

function testFileExists(filePath, description) {
  const exists = fs.existsSync(filePath)
  assert(exists, description)
  return exists
}

function testFileContains(filePath, searchString, description) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const contains = content.includes(searchString)
    assert(contains, description)
    return contains
  } catch (err) {
    assert(false, `${description} (file read error)`)
    return false
  }
}

function testFileNotContains(filePath, searchString, description) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const notContains = !content.includes(searchString)
    assert(notContains, description)
    return notContains
  } catch (err) {
    assert(false, `${description} (file read error)`)
    return false
  }
}

function testFileSize(filePath, minSize, description) {
  try {
    const stats = fs.statSync(filePath)
    const meetsMin = stats.size >= minSize
    assert(meetsMin, description)
    return meetsMin
  } catch (err) {
    assert(false, `${description} (file stat error)`)
    return false
  }
}

console.log(`\n${colors.blue}Running Build Tests...${colors.reset}\n`)

// ============================================================================
// BUNDLED BUILD TESTS
// ============================================================================

console.log(`${colors.yellow}Bundled ESM Build Tests${colors.reset}`)
testFileExists(
  'dist/railsui-stimulus.module.js',
  'Bundled ESM file exists'
)
testFileExists(
  'dist/railsui-stimulus.module.js.map',
  'Bundled ESM source map exists'
)
testFileSize(
  'dist/railsui-stimulus.module.js',
  50000,
  'Bundled ESM file is at least 50KB (includes dependencies)'
)
testFileContains(
  'dist/railsui-stimulus.module.js',
  'import{Controller',
  'Bundled ESM imports from @hotwired/stimulus (external)'
)
testFileNotContains(
  'dist/railsui-stimulus.module.js',
  'import tippy from',
  'Bundled ESM has tippy.js bundled (no external import)'
)
testFileNotContains(
  'dist/railsui-stimulus.module.js',
  'import flatpickr from',
  'Bundled ESM has flatpickr bundled (no external import)'
)

console.log(`\n${colors.yellow}Bundled CJS Build Tests${colors.reset}`)
testFileExists(
  'dist/railsui-stimulus.cjs',
  'Bundled CJS file exists'
)
testFileExists(
  'dist/railsui-stimulus.cjs.map',
  'Bundled CJS source map exists'
)
testFileSize(
  'dist/railsui-stimulus.cjs',
  50000,
  'Bundled CJS file is at least 50KB (includes dependencies)'
)

// ============================================================================
// IMPORTMAP BUILD TESTS
// ============================================================================

console.log(`\n${colors.yellow}Importmap Build Tests${colors.reset}`)

// Test index file
testFileExists(
  'dist/importmap/index.js',
  'Importmap index.js exists'
)
testFileExists(
  'dist/importmap/index.js.map',
  'Importmap index.js.map exists'
)
testFileContains(
  'dist/importmap/index.js',
  'RailsuiClipboard',
  'Importmap index exports RailsuiClipboard'
)
testFileContains(
  'dist/importmap/index.js',
  'RailsuiTooltip',
  'Importmap index exports RailsuiTooltip'
)

// Test individual component files
const components = [
  'railsui_clipboard',
  'railsui_combobox',
  'railsui_count_up',
  'railsui_date_range_picker',
  'railsui_dropdown',
  'railsui_modal',
  'railsui_password_toggle',
  'railsui_range',
  'railsui_read_more',
  'railsui_select_all',
  'railsui_tabs',
  'railsui_toast',
  'railsui_toggle',
  'railsui_tooltip',
]

components.forEach(component => {
  testFileExists(
    `dist/importmap/${component}.js`,
    `Importmap ${component}.js exists`
  )
  testFileExists(
    `dist/importmap/${component}.js.map`,
    `Importmap ${component}.js.map exists`
  )
})

// Test that importmap files keep dependencies external
testFileContains(
  'dist/importmap/railsui_tooltip.js',
  'import tippy from "tippy.js"',
  'Importmap tooltip keeps tippy.js external'
)
testFileContains(
  'dist/importmap/railsui_tooltip.js',
  'import { Controller } from "@hotwired/stimulus"',
  'Importmap tooltip keeps @hotwired/stimulus external'
)
testFileContains(
  'dist/importmap/railsui_date_range_picker.js',
  'import flatpickr from "flatpickr"',
  'Importmap date picker keeps flatpickr external'
)
testFileContains(
  'dist/importmap/railsui_dropdown.js',
  'from "stimulus-use"',
  'Importmap dropdown keeps stimulus-use external'
)

// Test that importmap files are NOT minified
testFileContains(
  'dist/importmap/railsui_tooltip.js',
  'connect() {',
  'Importmap files are not minified (readable code)'
)

// ============================================================================
// CONFIGURATION FILE TESTS
// ============================================================================

console.log(`\n${colors.yellow}Configuration File Tests${colors.reset}`)

testFileExists(
  'esbuild.importmap.js',
  'esbuild.importmap.js build script exists'
)
testFileExists(
  'importmap.json',
  'importmap.json configuration file exists'
)
testFileContains(
  'importmap.json',
  '@hotwired/stimulus',
  'importmap.json includes stimulus dependency'
)
testFileContains(
  'importmap.json',
  'tippy.js',
  'importmap.json includes tippy.js dependency'
)
testFileContains(
  'importmap.json',
  'flatpickr',
  'importmap.json includes flatpickr dependency'
)

// ============================================================================
// PACKAGE.JSON TESTS
// ============================================================================

console.log(`\n${colors.yellow}Package.json Tests${colors.reset}`)

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))

assert(
  packageJson.scripts['build-importmap'] !== undefined,
  'package.json has build-importmap script'
)
assert(
  packageJson.scripts.build.includes('build-importmap'),
  'package.json build script includes build-importmap'
)
assert(
  packageJson.exports !== undefined,
  'package.json has exports field'
)
assert(
  packageJson.exports['.'] !== undefined,
  'package.json exports has "." entry'
)
assert(
  packageJson.exports['./importmap'] !== undefined,
  'package.json exports has "./importmap" entry'
)
assert(
  packageJson.exports['./importmap/*'] !== undefined,
  'package.json exports has "./importmap/*" entry'
)

// ============================================================================
// DOCUMENTATION TESTS
// ============================================================================

console.log(`\n${colors.yellow}Documentation Tests${colors.reset}`)

testFileExists('README.md', 'README.md exists')
testFileExists('IMPORTMAP.md', 'IMPORTMAP.md exists')
testFileExists('BUILD.md', 'BUILD.md exists')
testFileExists('PUBLISHING.md', 'PUBLISHING.md exists')
testFileExists('CLAUDE.md', 'CLAUDE.md exists')

testFileContains(
  'README.md',
  'IMPORTMAP.md',
  'README.md links to IMPORTMAP.md'
)
testFileContains(
  'README.md',
  'BUILD.md',
  'README.md links to BUILD.md'
)
testFileContains(
  'IMPORTMAP.md',
  'config/importmap.rb',
  'IMPORTMAP.md includes Rails setup instructions'
)
testFileContains(
  'BUILD.md',
  'npm install',
  'BUILD.md includes npm installation instructions'
)

// ============================================================================
// RESULTS
// ============================================================================

console.log(`\n${colors.blue}${'='.repeat(50)}${colors.reset}`)
console.log(`${colors.green}Passed: ${passedTests}${colors.reset}`)
console.log(`${colors.red}Failed: ${failedTests}${colors.reset}`)
console.log(`${colors.blue}${'='.repeat(50)}${colors.reset}\n`)

// Exit with appropriate code
process.exit(failedTests > 0 ? 1 : 0)
