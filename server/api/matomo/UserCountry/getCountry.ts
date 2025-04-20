import MatomoQuery from "~/models/MatomoQuery";
import {useIdGetterFromQuery} from "~/composables/useIdGetterFromQuery";
import {MatomoCountryCollection} from "~/models/MatomoCountry";

export default defineEventHandler(async (event) : Promise<MatomoCountryCollection>=> {
    const id = useIdGetterFromQuery(event);
    const matomoQuery = new MatomoQuery('UserCountry.getCountry', id);
    let response = await matomoQuery.doQuery(matomoQuery);
    return MatomoCountryCollection.fromJSON(response);
});
