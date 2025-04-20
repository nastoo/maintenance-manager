import MatomoQuery from "~/models/MatomoQuery";
import {useIdGetterFromQuery} from "~/composables/useIdGetterFromQuery";
import {MatomoDeviceCollection} from "~/models/MatomoDevice";

export default defineEventHandler(async (event): Promise<MatomoDeviceCollection> => {
    const id = useIdGetterFromQuery(event);
    const matomoQuery = new MatomoQuery('DevicesDetection.getType', id)
    let response = await matomoQuery.doQuery(matomoQuery);
    return MatomoDeviceCollection.fromJSON(response);
});
