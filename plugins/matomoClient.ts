import {MatomoSite, MatomoSiteCollection} from '@/models/MatomoSite'
import {MatomoVisitSummary} from "~/models/MatomoVisitSummary";
import {MatomoVisitFrequency} from "~/models/MatomoVisitFrequency";
import {MatomoCountryCollection} from "~/models/MatomoCountry";
import {MatomoPageTitlesCollection} from "~/models/MatomoPageTitles";
import {MatomoDeviceCollection} from "~/models/MatomoDevice";
import {MatomoReferrerCollection} from "~/models/MatomoReferrer";

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            matomoClient: {
                getSites: async (): Promise<MatomoSiteCollection> => {
                    const {data} = await useFetch('/api/matomo/SitesManager/getSites')
                    return MatomoSiteCollection.fromJSON(data);
                },
                getSiteFromId: async (id: number): Promise<MatomoSite> => {
                    const {data} = await useFetch('/api/matomo/SitesManager/getSiteFromId', {
                        params: {id}
                    })
                    return MatomoSite.fromJSON(data);
                },
                getVisitSummary: async (id: number): Promise<MatomoVisitSummary> => {
                    const {data} = await useFetch('/api/matomo/VisitSummary/get', {
                        params: {id}
                    })
                    return MatomoVisitSummary.fromJSON(data);
                },
                getVisitFrequency: async (id: number): Promise<MatomoVisitFrequency> => {
                    const {data} = await useFetch('/api/matomo/VisitFrequency/get', {
                        params: {id}
                    })
                    return MatomoVisitFrequency.fromJSON(data);
                },
                getUserCountry: async (id: number): Promise<MatomoCountryCollection> => {
                    const {data} = await useFetch('/api/matomo/UserCountry/getCountry', {
                        params: {id}
                    })
                    return MatomoCountryCollection.fromJSON(data);
                },
                getPageTitles: async (id: number): Promise<MatomoPageTitlesCollection> => {
                    const {data} = await useFetch('/api/matomo/Actions/getPageTitles', {
                        params: {id}
                    })
                    return MatomoPageTitlesCollection.fromJSON(data);
                },
                getDeviceTypes: async (id: number): Promise<MatomoDeviceCollection> => {
                    const {data} = await useFetch('/api/matomo/DevicesDetection/getType', {
                        params: {id}
                    })
                    return MatomoDeviceCollection.fromJSON(data);
                },
                getReferrers: async (id: number): Promise<MatomoReferrerCollection> => {
                    const {data} = await useFetch('/api/matomo/Referrers/getReferrerType', {
                        params: {id}
                    })
                    return MatomoReferrerCollection.fromJSON(data);
                }
            }
        }
    }
})
