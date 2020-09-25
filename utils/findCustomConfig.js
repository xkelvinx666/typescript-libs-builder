const path = require('path');
const fs = require('fs');

function getConfigPath(customPaths, basePath) {
  const absolutePaths = [
    ...customPaths.map(pathname => path.resolve(pathname)),
    path.join(__dirname, basePath),
  ];
  return absolutePaths.find(dir => fs.existsSync(dir));
}

function getConfigContent(customPaths, basePath) {
  const configPath = getConfigPath(customPaths, basePath);

  return configPath ? require(configPath) : {};
}

module.exports = {
  getConfigPath,
  getConfigContent,
};
