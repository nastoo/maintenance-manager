export class MatomoReferrer {
    label: string = "";
    nb_visits: number = 0;
    nb_actions: number = 0;
    max_actions: number = 0;
    sum_visit_length: number = 0;
    bounce_count: number = 0;
    nb_visits_converted: number = 0;
    sum_daily_nb_uniq_visitors: number = 0;
    sum_daily_nb_users: number = 0;
    segment: string = "";
    referrer_type: number = 0;

    constructor(init?: Partial<MatomoReferrer>) {
        Object.assign(this, init);
    }

    public static fromJSON(json: string | object): MatomoReferrer {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoReferrer(obj.value);
        }
        return new MatomoReferrer(obj);
    }
}


export class MatomoReferrerCollection {
    referrers: MatomoReferrer[];

    constructor(init?: Partial<MatomoReferrer[]> | Partial<MatomoReferrerCollection>) {
        if (!init) {
            this.referrers = [];
            return this;
        }

        if (init instanceof MatomoReferrerCollection) {
            this.referrers = init.referrers.map(country => new MatomoReferrer(country));
            return this;
        }

        if (Array.isArray(init)) {
            this.referrers = Array.isArray(init) ? init.map(site => new MatomoReferrer(site)) : [];
            if (init.map(site => new MatomoReferrer(site))) {
                this.referrers = init.map(site => new MatomoReferrer(site));
            }
            return this;
        }

        if (init?.referrers) {
            this.referrers = init.referrers.map(referrer => new MatomoReferrer(referrer));
            return this;
        }

        this.referrers = [];
        return this;
    }

    public static fromJSON(json: string | object): MatomoReferrerCollection {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoReferrerCollection(obj.value);
        }
        return new MatomoReferrerCollection(obj);
    }
}
