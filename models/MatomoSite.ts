export class MatomoSite {
    idsite: number = 0;
    name: string = "";
    main_url: string = "";
    ts_created: string = "";
    ecommerce: number = 0;
    sitesearch: number = 0;
    sitesearch_keyword_parameters: string = "";
    sitesearch_category_parameters: string = "";
    timezone: string = "";
    currency: string = "";
    exclude_unknown_urls: number = 0;
    excluded_ips: string = "";
    excluded_parameters: string = "";
    excluded_user_agents: string = "";
    excluded_referrers: string = "";
    group: string = "";
    type: string = "";
    keep_url_fragment: number = 0;
    creator_login: string = "";
    timezone_name: string = "";
    currency_name: string = "";

    constructor(init?: Partial<MatomoSite>) {
        Object.assign(this, init);
    }

    static fromJSON(json: string | object): MatomoSite {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoSite(obj.value);
        }
        return new MatomoSite(obj);
    }
}

export class MatomoSiteCollection {
    sites: MatomoSite[];

    constructor(init?: Partial<MatomoSite[]> | Partial<MatomoSiteCollection>) {
        if (!init) {
            this.sites = [];
            return this;
        }

        if (init instanceof MatomoSiteCollection) {
            this.sites = init.sites.map(site => new MatomoSite(site));
            return this;
        }

        if (Array.isArray(init)) {
            this.sites = Array.isArray(init) ? init.map(site => new MatomoSite(site)) : [];
            if (init.map(site => new MatomoSite(site))) {
                this.sites = init.map(site => new MatomoSite(site));
            }
            return this;
        }

        if (init?.sites) {
            this.sites = init.sites.map(site => new MatomoSite(site));
            return this;
        }

        this.sites = [];
        return this;
    }

    static fromJSON(json: string | object): MatomoSiteCollection {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoSiteCollection(obj.value);
        }
        return new MatomoSiteCollection(obj);
    }
}
