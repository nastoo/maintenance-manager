import MatomoQuery from "~/models/MatomoQuery";
import {useIdGetterFromQuery} from "~/composables/useIdGetterFromQuery";
import {MatomoPageTitlesCollection} from "~/models/MatomoPageTitles";

export default defineEventHandler(async (event): Promise<MatomoPageTitlesCollection> => {
    const id = useIdGetterFromQuery(event);
    const matomoQuery = new MatomoQuery('Actions.getPageTitles', id)
    let response =  await matomoQuery.doQuery(matomoQuery);
    return MatomoPageTitlesCollection.fromJSON(response);
});
