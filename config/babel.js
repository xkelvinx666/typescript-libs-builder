const { getConfigContent } = require('../utils/findCustomConfig');

module.exports = getConfigContent(
  ['./babel.config.json', './babel.config.js', './.babelrc'],
  '../babel.config.json',
);
