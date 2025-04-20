import MatomoQuery from "~/models/MatomoQuery";
import {MatomoSite} from "~/models/MatomoSite";
import {useIdGetterFromQuery} from "~/composables/useIdGetterFromQuery";

export default defineEventHandler(async (event): Promise<MatomoSite> => {
    const id = useIdGetterFromQuery(event);

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing id parameter',
        });
    }

    const matomoQuery = new MatomoQuery('SitesManager.getSiteFromId', id);
    let response = await matomoQuery.doQuery(matomoQuery);

    // if(response.result === 'error') {
    //     throw createError({
    //         statusCode: 404,
    //         statusMessage: response.message,
    //     });
    // }

    let site = new MatomoSite(response);

    if (!site) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Site not found',
        });
    }

    return site;
});
