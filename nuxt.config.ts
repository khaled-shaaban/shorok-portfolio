// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-22",
  devtools: { 
    enabled: true 
  },
  devServer: {
    port: 3000, // This also affects the production server
  },
  ssr: false,
  runtimeConfig: {
    // The private keys which are only available server-side
  },
  plugins: [
    '@/plugins/click-outside.js',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxtjs/device',
    '@nuxt/ui',
    '@hypernym/nuxt-anime',
    'nuxt-swiper'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    lazy: true,
    // langDir: './locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'ar-SA',
        shortCode: 'ar', // used to be compatible with the api in headers
        name: 'العربية',
        iso: 'ar-SA',
        file: 'ar-SA.js',
        dir: 'rtl',
      },
      {
        code: 'en-US',
        shortCode: 'en', // used to be compatible with the api in headers
        name: 'English',
        iso: 'en-US',
        file: 'en-US.js',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'en-US',
    defaultDirection: 'ltr',
  },
  experimental: {
    appManifest: false,
    payloadExtraction: false,
    renderJsonPayloads: false
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  app: {
    // Enable cache busting by adding a build timestamp or hash
    buildAssetsDir: '/_nuxt/',  // Default directory
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
        { 'http-equiv': 'Pragma', content: 'no-cache' },
        { 'http-equiv': 'Expires', content: '0' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      script: [{
        src: "//www.instagram.com/embed.js",
        type: "text/javascript"
      }]
    }
  },
  vite: {
    // Add build-time hash to generated files
    build: {
      manifest: true,
      ssrManifest: true,
      rollupOptions: {
        output: {
          entryFileNames: '_nuxt/[name].[hash].js',
          chunkFileNames: '_nuxt/[name].[hash].js',
          assetFileNames: '_nuxt/[name].[hash][extname]',
        }
      }
    }
  }
})