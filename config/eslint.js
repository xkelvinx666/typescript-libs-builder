const { getConfigContent } = require('../utils/findCustomConfig');

module.exports = getConfigContent(
  ['./.eslintrc.js', './.eslintrc.json'],
  '../.eslintrc.js',
);
