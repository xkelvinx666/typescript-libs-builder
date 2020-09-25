const { getConfigContent } = require('../utils/findCustomConfig');

module.exports = getConfigContent(
  ['./package.json'],
  '../package.json',
);
