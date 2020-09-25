# typescript-libs-builder

a builder for typescript libs,including eslint babel jest

> 'xxx' below is your project package.json name

## how to use
``` 
# install
npm install typescript-libs-builder --save-dev
```

```
# add build script in your project package.json
"scripts": {
  "init": "node ./node_modules/typescript-libs-builder/lib/init.js",
  "dev": "node ./node_modules/typescript-libs-builder/lib/dev.js",
  "build": "node ./node_modules/typescript-libs-builder/lib/build.js",
  "format": "node ./node_modules/typescript-libs-builder/lib/format.js",
  "test": "node ./node_modules/typescript-libs-builder/lib/test.js"
}
# add export declartion
"module": "./dist/xxx.es.min.js",
"main": "./dist/xxx.cjs.min.js",
"typings": "./dist/index.d.ts",
```

```
# init your project dir, copy boilerplate
npm run init
# debug your code, and output 'xxx.es.js'
npm run dev
# build your code, and outout 'xxx.es.min.js', 'xxx.cjs.min.js', 'xxx.umd.min.js'
npm run build
# format and fix your code in 'src' dir
npm run format
# run jest test in '__test__' dir
npm run test
```

## output file description

|output file name|description|
|---|---|
|xxx.es.js|build src/index.ts and node_modules by es|
|xxx.es.min.js|minify build src/index.ts without node_modules by es|
|xxx.cjs.min.js|minify build src/index.ts without node_modules by cjs|
|xxx.umd.min.js|minify build src/index.ts and node_modules by umd|

## redefine build plugin config
"babel" and "eslint" config can redefine, just declare "babel.config.js" or ".eslintrc.js" in your project dir
