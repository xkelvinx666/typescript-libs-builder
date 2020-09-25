const { ESLint } = require('eslint');
const { getConfigPath } = require('../utils/findCustomConfig');

(async function main() {
  const ESLINT_CONFIG_PATH = getConfigPath(['./.eslintrc.js'], './.eslintrc.json');

  const eslint = new ESLint({ fix: true, overrideConfigFile: ESLINT_CONFIG_PATH });
  const results = await eslint.lintFiles(['src/**/*.ts']);
  await ESLint.outputFixes(results);

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  console.log(resultText);
}()).catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
