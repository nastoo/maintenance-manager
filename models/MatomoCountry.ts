export class MatomoCountry {
    label: string = "";
    nb_visits: number = 0;
    nb_actions: number = 0;
    max_actions: number = 0;
    sum_visit_length: number = 0;
    bounce_count: number = 0;
    nb_visits_converted: number = 0;
    sum_daily_nb_uniq_visitors: number = 0;
    sum_daily_nb_users: number = 0;
    code: string = "";
    logo: string = "";
    segment: string = "";
    logoHeight: number = 0;

    constructor(init?: Partial<MatomoCountry>) {
        Object.assign(this, init);
    }

    public static fromJSON(json: string | object): MatomoCountry {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoCountry(obj.value);
        }
        return new MatomoCountry(obj);
    }
}

export class MatomoCountryCollection {
    countries: MatomoCountry[];

    constructor(init?: Partial<MatomoCountry[]> | Partial<MatomoCountryCollection>) {
        if (!init) {
            this.countries = [];
            return this;
        }

        if (init instanceof MatomoCountryCollection) {
            this.countries = init.countries.map(country => new MatomoCountry(country));
            return this;
        }

        if (Array.isArray(init)) {
            this.countries = Array.isArray(init) ? init.map(site => new MatomoCountry(site)) : [];
            if (init.map(site => new MatomoCountry(site))) {
                this.countries = init.map(site => new MatomoCountry(site));
            }
            return this;
        }

        if (init?.countries) {
            this.countries = init.countries.map(site => new MatomoCountry(site));
            return this;
        }

        this.countries = [];
        return this;
    }

    public static fromJSON(json: string | object): MatomoCountryCollection {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoCountryCollection(obj.value);
        }
        return new MatomoCountryCollection(obj);
    }
}
