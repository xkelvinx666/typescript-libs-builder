const { eslint } = require('rollup-plugin-eslint');
const path = require('path');

module.exports = eslint({
  configFile: path.join(__dirname, '..', '.eslintrc.js'),
  throwOnError: true,
  throwOnWarning: true
});
