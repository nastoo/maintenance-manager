import MatomoQuery from "~/models/MatomoQuery";
import {useIdGetterFromQuery} from "~/composables/useIdGetterFromQuery";
import {MatomoVisitFrequency} from "~/models/MatomoVisitFrequency";

export default defineEventHandler(async (event): Promise<MatomoVisitFrequency> => {
    const id = useIdGetterFromQuery(event);
    const matomoQuery = new MatomoQuery('VisitFrequency.get', id);
    let response = await matomoQuery.doQuery(matomoQuery);
    return MatomoVisitFrequency.fromJSON(response);
});
