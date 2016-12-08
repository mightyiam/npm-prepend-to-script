# prepend-to-npm-script [![Build Status](https://travis-ci.org/mightyiam/prepend-to-npm-script.svg?branch=master)](https://travis-ci.org/mightyiam/prepend-to-npm-script) [![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Helps you prepend things to npm scripts.

## Usage

### Example

```js
const prependToNpmScript = require('prepend-to-npm-script')
prependToNpmScript('test', 'echo this, first').then(() => console.log('done'))
```

Now, if your test script was `echo testing`, it is now `echo this, first && echo testing`.

### API

#### `prependToNpmScript(name, script)`

- `name`:
  the name of the script to prepend to
- `script`:
  the script to prepend

Returns empty promise.
