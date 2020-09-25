const rollup = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const { terser } = require('rollup-plugin-terser');
const progress = require('rollup-plugin-progress');
const packageConfig = require('../config/package');
const eslintConfig = require('../rollup-plugins/eslint');
const tsConfig = require('../rollup-plugins/typescript');

const dependencies = Object.keys(packageConfig.dependencies || []);

const SRC_DIR = 'src';
const ENTRY_NAME = 'index.ts';
const DIST_DIR = 'dist';

const RESOLVE_PLUGINS = [
  progress(),
  eslintConfig,
  tsConfig,
  nodeResolve(),
  commonjs(),
  json(),
  terser(),
];

const OPTIONS = {
  INPUT: {
    ES: {
      input: `${SRC_DIR}/${ENTRY_NAME}`,
      plugins: [
        progress(),
        eslintConfig,
        tsConfig,
        nodeResolve(),
        commonjs(),
        json(),
        terser(),
      ],
      external: dependencies,
    },
    CJS: {
      input: `${SRC_DIR}/${ENTRY_NAME}`,
      plugins: [
        progress(),
        eslintConfig,
        tsConfig,
        nodeResolve(),
        commonjs(),
        json(),
        terser(),
      ],
      external: dependencies,
    },
    UMD: {
      input: `${SRC_DIR}/${ENTRY_NAME}`,
      plugins: RESOLVE_PLUGINS,
    },
  },
  OUTPUT: {
    ES: { file: `${DIST_DIR}/${packageConfig.name}.es.min.js`, format: 'es' },
    CJS: {
      file: `${DIST_DIR}/${packageConfig.name}.cjs.min.js`,
      format: 'cjs',
    },
    UMD: {
      name: packageConfig.name,
      file: `${DIST_DIR}/${packageConfig.name}.umd.min.js`,
      format: 'umd',
      strict: false,
    },
  },
};

function buildMainEntry() {
  const buildJobs = Object.keys(OPTIONS.INPUT)
    .map((optionType) => new Promise((resolve, reject) => {
      rollup
        .rollup(OPTIONS.INPUT[optionType])
        .then((bundle) => bundle.write(OPTIONS.OUTPUT[optionType]).then(resolve))
        .catch(reject);
    }));
  return Promise.all(buildJobs);
}

buildMainEntry();
