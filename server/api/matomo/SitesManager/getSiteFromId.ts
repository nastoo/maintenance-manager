import MatomoQuery from "~/models/MatomoQuery";
import {MatomoSite} from "~/models/MatomoSite";

export default defineEventHandler(async (event): Promise<MatomoSite> => {
    // get id from query
    const query = getQuery(event);
    const id = parseInt(<string>query.id);

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
