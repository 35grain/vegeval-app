export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    runtimeConfig: {
        baseUrl: process.env.BASE_URL_SERVER,
        public: {
            baseUrl: process.env.BASE_URL_CLIENT
        }
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        cssPath: '~/assets/styles/main.scss'
    }
})