const path = require('path');

module.exports = {
  projects: [
    {
      preset: 'ts-jest',
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      rootDir: __dirname,
      roots: [path.join(process.cwd(), '__tests__')],
    },
    {
      preset: 'ts-jest',
      displayName: 'test',
      rootDir: __dirname,
      roots: [path.join(process.cwd(), '__tests__')],
    },
  ],
};
