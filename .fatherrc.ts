import { defineConfig } from 'father'


export default defineConfig({
  umd: {
    entry: 'src/index.tsx',
    // name: "@lingzhu-cdm-app/renderer",
    output: {
      path: 'umd',
      filename: 'index.js',
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      // moment: 'moment',
      // lodash: 'lodash',
    },
    chainWebpack: (config, { env, webpack}) => {
      config.optimization.minimizer('js-terser').tap(args => {
        // 保留注释
        args[0].terserOptions.format = {
          ...args[0].terserOptions.format,
           comments:   /^!/, // 或者使用 'all' 保留所有注释
        };
        return args;
      });
      return config
    },
  },
  define: {
  },
})
