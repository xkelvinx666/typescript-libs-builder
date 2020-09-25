const { ESLint } = require('eslint');
const eslintConfig = require('../config/eslint');

(async function main() {
  const eslint = new ESLint({ fix: true, baseConfig: eslintConfig });
  const results = await eslint.lintFiles(['src/**/*.ts']);
  await ESLint.outputFixes(results);

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  console.log(resultText);
}()).catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
