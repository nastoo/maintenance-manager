export class MatomoPageTitles {
    label: string = "";
    nb_visits: number = 0;
    nb_hits: number = 0;
    sum_time_spent: number = 0;
    nb_hits_with_time_network: number = 0;
    min_time_network: string = "";
    max_time_network: string = "";
    nb_hits_with_time_server: number = 0;
    min_time_server: string = "";
    max_time_server: string = "";
    nb_hits_with_time_transfer: number = 0;
    min_time_transfer: string = "";
    max_time_transfer: string = "";
    nb_hits_with_time_dom_processing: number = 0;
    min_time_dom_processing: string = "";
    max_time_dom_processing: string = "";
    entry_nb_visits: number = 0;
    entry_nb_actions: number = 0;
    entry_sum_visit_length: number = 0;
    entry_bounce_count: number = 0;
    exit_nb_visits: number = 0;
    sum_daily_nb_uniq_visitors: number = 0;
    sum_daily_entry_nb_uniq_visitors: number = 0;
    sum_daily_exit_nb_uniq_visitors: number = 0;
    avg_time_network: number = 0;
    avg_time_server: number = 0;
    avg_time_transfer: number = 0;
    avg_time_dom_processing: number = 0;
    avg_page_load_time: number = 0;
    avg_time_on_page: number = 0;
    bounce_rate: string = "";
    exit_rate: string = "";
    segment: string = "";

    constructor(init?: Partial<MatomoPageTitles>) {
        Object.assign(this, init);
    }

    public static fromJSON(json: string | object): MatomoPageTitles {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoPageTitles(obj.value);
        }
        return new MatomoPageTitles(obj);
    }
}


export class MatomoPageTitlesCollection {
    pages: MatomoPageTitles[];

    constructor(init?: Partial<MatomoPageTitles[]> | Partial<MatomoPageTitlesCollection>) {
        if (!init) {
            this.pages = [];
            return this;
        }

        if (init instanceof MatomoPageTitlesCollection) {
            this.pages = init.pages.map(country => new MatomoPageTitles(country));
            return this;
        }

        if (Array.isArray(init)) {
            this.pages = Array.isArray(init) ? init.map(site => new MatomoPageTitles(site)) : [];
            if (init.map(site => new MatomoPageTitles(site))) {
                this.pages = init.map(site => new MatomoPageTitles(site));
            }
            return this;
        }

        if (init?.pages) {
            this.pages = init.pages.map(site => new MatomoPageTitles(site));
            return this;
        }

        this.pages = [];
        return this;
    }

    public static fromJSON(json: string | object): MatomoPageTitlesCollection {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoPageTitlesCollection(obj.value);
        }
        return new MatomoPageTitlesCollection(obj);
    }
}
