export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            }
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    runtimeConfig: {
        baseUrl: process.env.BASE_URL_SERVER,
        public: {
            baseUrl: process.env.BASE_URL_CLIENT
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/html-validator'
    ],
    tailwindcss: {
        cssPath: '~/assets/styles/main.scss'
    }
})