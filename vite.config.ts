import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
import { resolve } from 'path'
export default defineConfig({
  plugins: [vue(),
    // 添加下面这块
    eslintPlugin()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
