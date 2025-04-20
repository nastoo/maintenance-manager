import {MatomoSite, MatomoSiteCollection} from '@/models/MatomoSite'

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            matomoClient: {
                getSites: async () : Promise<MatomoSiteCollection> => {
                    const {data} = await useFetch('/api/matomo/SitesManager/getSites')
                    return MatomoSiteCollection.fromJSON(data);
                },
                getSiteFromId: async (id: number) : Promise<MatomoSite> => {
                    const {data} = await useFetch('/api/matomo/SitesManager/getSiteFromId', {
                        params: {id}
                    })
                    return MatomoSite.fromJSON(data);
                },
            }
        }
    }
})
