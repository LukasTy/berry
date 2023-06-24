module.exports = {
  targets: {
    node: `18.12.0`,
  },
  presets: [
    [`@babel/preset-env`, {modules: `commonjs`}],
    `@babel/preset-typescript`,
    `@babel/preset-react`,
  ],
  ignore: [
    `**/*.d.ts`,
    `packages/yarnpkg-libzip/sources/libzip.js`,
  ],
};
