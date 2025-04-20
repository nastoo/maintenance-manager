import MatomoQuery from "~/models/MatomoQuery";
import {useIdGetterFromQuery} from "~/composables/useIdGetterFromQuery";
import {MatomoReferrerCollection} from "~/models/MatomoReferrer";

export default defineEventHandler(async (event): Promise<MatomoReferrerCollection> => {
    const id = useIdGetterFromQuery(event);
    const matomoQuery = new MatomoQuery('Referrers.getReferrerType', id)
    let response = await matomoQuery.doQuery(matomoQuery);
    return MatomoReferrerCollection.fromJSON(response);
});
