import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // per https://github.com/aws-amplify/amplify-js/issues/9639#issuecomment-1081781840
	resolve: { alias: { './runtimeConfig': './runtimeConfig.browser' } }
})
