export class MatomoDevice {
    label: string = "";
    nb_visits: number = 0;
    nb_actions?: number = 0;
    max_actions?: number = 0;
    sum_visit_length?: number = 0;
    bounce_count?: number = 0;
    nb_visits_converted?: number = 0;
    sum_daily_nb_uniq_visitors?: number = 0;
    sum_daily_nb_users?: number = 0;
    segment: string = "";
    logo: string = "";

    constructor(init?: Partial<MatomoDevice>) {
        Object.assign(this, init);
    }

   public static fromJSON(json: string | object): MatomoDevice {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoDevice(obj.value);
        }
        return new MatomoDevice(obj);
    }
}

export class MatomoDeviceCollection {
    devices: MatomoDevice[];

    constructor(init?: Partial<MatomoDevice[]> | Partial<MatomoDeviceCollection>) {
        if (!init) {
            this.devices = [];
            return this;
        }

        if (init instanceof MatomoDeviceCollection) {
            this.devices = init.devices.map(country => new MatomoDevice(country));
            return this;
        }

        if (Array.isArray(init)) {
            this.devices = Array.isArray(init) ? init.map(site => new MatomoDevice(site)) : [];
            if (init.map(site => new MatomoDevice(site))) {
                this.devices = init.map(site => new MatomoDevice(site));
            }
            return this;
        }

        if (init?.devices) {
            this.devices = init.devices.map(site => new MatomoDevice(site));
            return this;
        }

        this.devices = [];
        return this;
    }

    public static fromJSON(json: string | object): MatomoDeviceCollection {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
        if (obj && typeof obj === "object" && "value" in obj) {
            return new MatomoDeviceCollection(obj.value);
        }
        return new MatomoDeviceCollection(obj);
    }
}
