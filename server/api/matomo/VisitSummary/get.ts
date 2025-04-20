import MatomoQuery from "~/models/MatomoQuery";
import {useIdGetterFromQuery} from "~/composables/useIdGetterFromQuery";
import {MatomoVisitSummary} from "~/models/MatomoVisitSummary";

export default defineEventHandler(async (event) : Promise<MatomoVisitSummary> => {
    const id = useIdGetterFromQuery(event);
    const matomoQuery = new MatomoQuery('VisitsSummary.get', id);
    let response = await matomoQuery.doQuery(matomoQuery);
    return MatomoVisitSummary.fromJSON(response);
});
