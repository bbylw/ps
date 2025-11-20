import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 修改为 './' (相对路径)
  // 这样构建出来的资源引用会是 src="./assets/..."
  // 它可以自动适配 GitHub Pages (子路径 /ps/) 和 Cloudflare Pages (根路径 /)
  base: './', 
  plugins: [react()],
})
