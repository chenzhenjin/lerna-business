import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
import path from 'path';
const decamelize = require('decamelize')

// 在 UMD 构建模式下为外部依赖提供一个全局变量
export const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
// 处理类库使用到的外部依赖
// 确保外部化处理那些你不想打包进库的依赖
export const EXTERNAL = [
  'react',
  'react-dom',
];

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName: (name: string, filename: string) => {
          const match = filename.replace(/\\/, '/').match(/.*\/src\/(.*)\/.*\.module\..*/);

          if (match) {
            return `bs-${decamelize(match[1], '-')}__${name}`;
          }

          return `bs-${name}`;
        },
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    build: {
      rollupOptions: {
        external: EXTERNAL,
        output: { globals: GLOBALS },
      },
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'bsComponents',
        fileName: (format) => `brotherstudy-components.${format}.js`,
      },
    },
  };
});
