const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const progress = require('rollup-plugin-progress');
const eslintConfig = require('../rollup-plugins/eslint');
const tsConfig = require('../rollup-plugins/typescript');
const packageConfig = require('../config/package');

const inputOptions = {
  input: 'src/index.ts',
  plugins: [progress(), eslintConfig, nodeResolve(), commonjs(), json(), tsConfig],
};
const outputOptions = {
  file: `dist/${packageConfig.name}.es.js`,
};

rollup.watch({
  ...inputOptions,
  output: [outputOptions],
  watch: {
    include: ['src/**'],
  },
});
