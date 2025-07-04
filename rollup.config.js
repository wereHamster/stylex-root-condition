import { babel } from '@rollup/plugin-babel';
import stylexPlugin from '@stylexjs/rollup-plugin';

const babelPlugin = babel({
  babelHelpers: 'bundled'
});

const config = {
  input: './main.js',
  output: {
    file: './bundle.js',
    format: 'cjs',
  },
  plugins: [
    babelPlugin,
    stylexPlugin({
      dev: false,
      fileName: 'stylex.css',
      runtimeInjection: true,
    })
  ],
};

export default config;