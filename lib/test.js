const test = require('jest');
const { getConfigPath } = require('../utils/findCustomConfig');

const customPath = getConfigPath(
  ['./jest.config.json', './jest.config.js'],
  '../jest.config.js',
);

test.run(['--bail', '--coverage'], customPath);
