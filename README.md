Note that `confused.js` is assumed to be an es module because it uses `import`.  However, it tries to export using CJS conventions.

As expected(?), webpack is locked into es module mode, and attempting to import the CJS export gets a `not found` warning.

```
$ yarn run go
yarn run go v0.21.3
$ yarn run import-from-unmixed-source && yarn run import-from-mixed-source
yarn run v0.21.3
$ webpack --context . --entry ./import-from-unmixed-source.js --output-filename unmixed.output.js
Hash: 8972400b654287a75fe3
Version: webpack 3.5.6
Time: 92ms
            Asset     Size  Chunks             Chunk Names
unmixed.output.js  36.6 kB       0  [emitted]  null
   [0] ./import-from-unmixed-source.js 58 bytes {0} [built]
   [1] ./sensible.js 92 bytes {0} [built]
    + 1 hidden module
✨  Done in 0.84s.
yarn run v0.21.3
$ webpack --context . --entry ./import-from-mixed-source.js --output-filename mixed.output.js
Hash: 40e6ef1f5611e336b19c
Version: webpack 3.5.6
Time: 88ms
          Asset     Size  Chunks             Chunk Names
mixed.output.js  36.6 kB       0  [emitted]  null
   [0] ./import-from-mixed-source.js 128 bytes {0} [built]
   [1] ./confused.js 88 bytes {0} [built]


  1 Verify that mixing es imports with cjs exports is a bad idea
    + 1 hidden module

WARNING in ./import-from-mixed-source.js
4:12-18 "export 'cowsay' was not found in './confused'
```

webpack still handles es/cjs files admirably, so long as you don't mix the two styles inside a single file.
