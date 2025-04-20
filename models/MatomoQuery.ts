import  {CustomDate} from "~/models/PeriodDates";

export default class MatomoQuery {
    idSite?: string;
    period: string = 'month';
    date: string = new CustomDate().getDateString();
    format: string = 'JSON';
    module: string = 'API';
    method: string;
    token_auth: string;

    // Optional parameters
    segment?: string;
    language?: string;
    formatMetrics?: object;
    limit?: number;
    idSubtable?: string;
    expanded?: boolean;
    flat?: boolean;
    label?: boolean;
    pivotBy?: string;
    pivotByColumn?: string;
    filterOffset?: number;

    constructor(method: string, idSite?: number) {
        this.idSite = idSite?.toString();
        this.method = method;
        this.token_auth = this.getMatomoToken();
    }

    public async doQuery(query: MatomoQuery): Promise<object> {
        return await $fetch(this.getMatomoBaseUrl(), {
            query: this,
            parseResponse: JSON.parse,
        })
    }

    private getMatomoToken(): string {
        const runtimeConfig = useRuntimeConfig();
        let matomoSettings = runtimeConfig.matomo;
        return matomoSettings.accessToken;
    }

    private getMatomoBaseUrl(): string {
        const runtimeConfig = useRuntimeConfig();
        let matomoSettings = runtimeConfig.matomo;
        return matomoSettings.baseUrl;
    }
}
