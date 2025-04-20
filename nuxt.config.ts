// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    modules: [
        '@nuxt/ui',
        '@nuxt/test-utils',
        '@nuxt/scripts',
        '@nuxt/fonts',
        '@nuxt/test-utils/module'
    ],

    runtimeConfig: {
        matomo: {
            baseUrl: '', // Base URL of Matomo setup. e.g. 'https://matomo.example.com'. This variable can be set in .env file (NUXT_MATOMO_BASE_URL)
            accessToken: '' // Access token for Matomo API. This variable can be set in .env file (NUXT_MATOMO_ACCESS_TOKEN)
        }
    }
})
