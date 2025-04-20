import MatomoQuery from "~/models/MatomoQuery";
import {MatomoSiteCollection} from "~/models/MatomoSite";

export default defineEventHandler(async (event): Promise<MatomoSiteCollection> => {
    const matomoQuery = new MatomoQuery('SitesManager.getAllSites');
    let response = await matomoQuery.doQuery(matomoQuery);
    return MatomoSiteCollection.fromJSON(response);
});
