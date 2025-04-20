export class MatomoVisitFrequency {
    nb_uniq_visitors_new: number = 0;
    nb_users_new: number = 0;
    nb_visits_new: number = 0;
    nb_actions_new: number = 0;
    nb_visits_converted_new: number = 0;
    bounce_count_new: number = 0;
    sum_visit_length_new: number = 0;
    max_actions_new: number = 0;
    bounce_rate_new: string = "";
    nb_actions_per_visit_new: number = 0;
    avg_time_on_site_new: number = 0;
    nb_uniq_visitors_returning: number = 0;
    nb_users_returning: number = 0;
    nb_visits_returning: number = 0;
    nb_actions_returning: number = 0;
    nb_visits_converted_returning: number = 0;
    bounce_count_returning: number = 0;
    sum_visit_length_returning: number = 0;
    max_actions_returning: number = 0;
    bounce_rate_returning: string = "";
    nb_actions_per_visit_returning: number = 0;
    avg_time_on_site_returning: number = 0;

    constructor(init?: Partial<MatomoVisitFrequency>) {
        Object.assign(this, init);
    }

    static fromJSON(json: string | object): MatomoVisitFrequency {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoVisitFrequency(obj.value);
        }
        return new MatomoVisitFrequency(obj);
    }
}
