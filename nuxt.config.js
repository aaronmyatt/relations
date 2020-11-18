let router;

if(process.env === 'production'){
  router = {
    router: {
      base: '/relations/'
    }
  };
} else {
  router = {
    router: {}
  };
}

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ...router,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'relations',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/dataModel.js' },
    { src: '~/plugins/truncateTextFilter.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    'nuxt-purgecss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-buefy',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true,
    // or
    analyze: {
      analyzerMode: 'static'
    },
    transpile: ['aaronmyatt/relations-data-model'],
  }
}
