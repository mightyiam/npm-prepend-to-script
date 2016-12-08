const modify = require('modify-pkg-up')

const prependToNpmScript = (name, script) => {
  const modifierFn = (pkg) => {
    pkg.scripts[name] = script + ' && ' + pkg.scripts[name]
    return pkg
  }

  return modify(modifierFn)
}

module.exports = prependToNpmScript
