import { babel } from '@rollup/plugin-babel';
import stylexPlugin from '@stylexjs/rollup-plugin';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import stylexSWCPlugin from '@stylexswc/rollup-plugin';

const babelPlugin = babel({
  babelHelpers: 'bundled'
});

const config = {
  input: './main.jsx',
  output: {
    file: './bundle.js',
    format: 'cjs',
  },
  plugins: [
    babelPlugin,
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      preventAssignment: true,
    }),
    // stylexPlugin({
    //   dev: true,
    //   runtimeInjection: true,
    // }),
    stylexSWCPlugin.default({
      dev: true,
      rsOptions: {
        runtimeInjection: true,
      }
    })
  ],
};

export default config;