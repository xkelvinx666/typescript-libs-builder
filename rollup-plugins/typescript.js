const ts = require('rollup-plugin-typescript2');
const path = require('path');
const { getConfigPath } = require('../utils/findCustomConfig');
const tsconfig = getConfigPath(['./tsconfig.json'], '../tsconfig.json');

module.exports = ts({
  tsconfig,
  tsconfigOverride: {
    include: [path.resolve('src')],
    exclude: [
      path.resolve('__tests__'),
      path.resolve('node_modules'),
    ],
  },
});
