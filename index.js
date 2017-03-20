'use strict';

const path = require('path');

function which (name, script) {
  if (!name) { throw new Error('package name must be provided'); }
  script = script || name;

  const pkg = require(`${name}/package.json`);
  const bin = pkg.bin[script];

  if (!bin) { throw new Error(`binary path for ${script} not found`); }

  return require.resolve(path.join(name, bin));
}

module.exports = which;
