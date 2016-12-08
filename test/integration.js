const { test } = require('ava')
const readPkgUp = require('read-pkg-up')
const writePkg = require('write-pkg')
const mkdir = require('mkdir-promise')
const del = require('del')

const fixturesDir = 'test/fixtures'

test.before(async () => {
  await mkdir(fixturesDir)
  process.chdir(fixturesDir)
})

let testCounter = 0

test.beforeEach(async (t) => {
  t.context.n = String(testCounter++)
  await mkdir(t.context.n)
  process.chdir(t.context.n)
})

test.afterEach(() => {
  process.chdir('..')
})

test.after(async () => {
  process.chdir('../..')
  await del([fixturesDir])
})

const subject = require('..')
const name = 'test'
const script = 'echo before'

const read = async () => {
  const pkg = await readPkgUp({ normalize: false })
  return pkg.pkg
}

test.serial('prepends to script', async t => {
  const existing = { scripts: { test: 'echo testing' } }
  await writePkg(existing)
  await subject(name, script)
  const modified = await read()
  const expected = { scripts: { test: script + ' && ' + existing.scripts.test } }
  t.deepEqual(modified, expected)
})
