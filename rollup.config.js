import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve, { DEFAULTS as RESOLVE_DEFAULTS } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import replace from "rollup-plugin-replace";
import typescript from "rollup-plugin-typescript";
import filesize from "rollup-plugin-filesize";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
const target_env = process.env.TARGET_ENV ? process.env.TARGET_ENV : "production";

import uglify from "@lopatnov/rollup-plugin-uglify";

const pkg = require("./package.json");

function external() {
  const { dependencies = {}, peerDependencies = {} } = pkg;

  const externals = [...Object.keys(dependencies), ...Object.keys(peerDependencies)];

  return (id) =>
    // match 'lodash' and 'lodash/fp/isEqual' for example
    externals.some((dep) => id === dep || id.startsWith(`${dep}/`));
}

const rollupCommonPlugins = [
  replace({
    "process.env.NODE_ENV": JSON.stringify(target_env),
  }),
  peerDepsExternal(),
  resolve({
    preferBuiltins: false,
    mainFields: ["module", "main", "browser"],
    extensions: [...RESOLVE_DEFAULTS.extensions, ".jsx"],
  }),
  postcss({
    minimize: true,
    module: true,
    inject: {
      insertAt: "top",
    },
  }),
  typescript(),
  commonjs({ include: /node_modules/ }),
  babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
  uglify(),
  filesize(),
];

const commonConfig = {
  external: external(),
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: rollupCommonPlugins,
};

export default {
  input: {
    index: "./src/index.ts",
    flowbite: "./src/flowbite/index.ts",
  },
  ...commonConfig,
};
