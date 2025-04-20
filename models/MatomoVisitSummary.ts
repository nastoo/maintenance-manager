export class MatomoVisitSummary {
    nb_uniq_visitors: number = 0;
    nb_users: number = 0;
    nb_visits: number = 0;
    nb_actions: number = 0;
    nb_visits_converted: number = 0;
    bounce_count: number = 0;
    sum_visit_length: number = 0;
    max_actions: number = 0;
    bounce_rate: string = "";
    nb_actions_per_visit: number = 0;
    avg_time_on_site: number = 0;

    constructor(init?: Partial<MatomoVisitSummary>) {
        Object.assign(this, init);
    }

    static fromJSON(json: string | object): MatomoVisitSummary {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoVisitSummary(obj.value);
        }
        return new MatomoVisitSummary(obj);
    }

}
