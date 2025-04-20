import MatomoQuery from "~/models/MatomoQuery";

export default defineEventHandler(async (event) => {
    const matomoQuery = new MatomoQuery('DevicesDetection.getType', 1)
    return await matomoQuery.doQuery(matomoQuery);
});
