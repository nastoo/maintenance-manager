import { describe, it, expect } from 'vitest';
import { MatomoSiteCollection, MatomoSite } from '@/models/MatomoSite';
import {MatomoVisitSummary} from "~/models/MatomoVisitSummary";
import {MatomoVisitFrequency} from "~/models/MatomoVisitFrequency";
import {MatomoCountry, MatomoCountryCollection} from "~/models/MatomoCountry";
import {MatomoDevice, MatomoDeviceCollection} from "~/models/MatomoDevice";
import {MatomoPageTitles, MatomoPageTitlesCollection} from "~/models/MatomoPageTitles";
import {MatomoReferrer, MatomoReferrerCollection} from "~/models/MatomoReferrer";

describe('MatomoSite', () => {
    it('should deserialize JSON correctly', () => {
        const sampleJson =
            "  {\n" +
            "    \"idsite\": 1,\n" +
            "    \"name\": \"Biocide Systèmes\",\n" +
            "    \"main_url\": \"https://biocide-systemes.fr\",\n" +
            "    \"ts_created\": \"2021-07-04 13:34:03\",\n" +
            "    \"ecommerce\": 0,\n" +
            "    \"sitesearch\": 1,\n" +
            "    \"sitesearch_keyword_parameters\": \"\",\n" +
            "    \"sitesearch_category_parameters\": \"\",\n" +
            "    \"timezone\": \"Europe/Paris\",\n" +
            "    \"currency\": \"EUR\",\n" +
            "    \"exclude_unknown_urls\": 0,\n" +
            "    \"excluded_ips\": \"45.147.97.239\",\n" +
            "    \"excluded_parameters\": \"\",\n" +
            "    \"excluded_user_agents\": \"\",\n" +
            "    \"excluded_referrers\": \"\",\n" +
            "    \"group\": \"\",\n" +
            "    \"type\": \"website\",\n" +
            "    \"keep_url_fragment\": 0,\n" +
            "    \"creator_login\": \"anonymous\",\n" +
            "    \"timezone_name\": \"France\",\n" +
            "    \"currency_name\": \"Euro\"\n" +
            "  }\n";

        const deserializedData = MatomoSite.fromJSON(sampleJson);

        expect(deserializedData).toBeDefined();
        expect(deserializedData.idsite).toBe(1);
    });
    it('should deserialize JSON correctly', () => {
        const sampleJson = "[\n" +
            "  {\n" +
            "    \"idsite\": 1,\n" +
            "    \"name\": \"Biocide Systèmes\",\n" +
            "    \"main_url\": \"https://biocide-systemes.fr\",\n" +
            "    \"ts_created\": \"2021-07-04 13:34:03\",\n" +
            "    \"ecommerce\": 0,\n" +
            "    \"sitesearch\": 1,\n" +
            "    \"sitesearch_keyword_parameters\": \"\",\n" +
            "    \"sitesearch_category_parameters\": \"\",\n" +
            "    \"timezone\": \"Europe/Paris\",\n" +
            "    \"currency\": \"EUR\",\n" +
            "    \"exclude_unknown_urls\": 0,\n" +
            "    \"excluded_ips\": \"45.147.97.239\",\n" +
            "    \"excluded_parameters\": \"\",\n" +
            "    \"excluded_user_agents\": \"\",\n" +
            "    \"excluded_referrers\": \"\",\n" +
            "    \"group\": \"\",\n" +
            "    \"type\": \"website\",\n" +
            "    \"keep_url_fragment\": 0,\n" +
            "    \"creator_login\": \"anonymous\",\n" +
            "    \"timezone_name\": \"France\",\n" +
            "    \"currency_name\": \"Euro\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"idsite\": 4,\n" +
            "    \"name\": \"Addictovigilance\",\n" +
            "    \"main_url\": \"https://addictovigilance.fr\",\n" +
            "    \"ts_created\": \"2022-02-23 20:22:30\",\n" +
            "    \"ecommerce\": 0,\n" +
            "    \"sitesearch\": 1,\n" +
            "    \"sitesearch_keyword_parameters\": \"\",\n" +
            "    \"sitesearch_category_parameters\": \"\",\n" +
            "    \"timezone\": \"Europe/Paris\",\n" +
            "    \"currency\": \"EUR\",\n" +
            "    \"exclude_unknown_urls\": 0,\n" +
            "    \"excluded_ips\": \"45.147.97.239\",\n" +
            "    \"excluded_parameters\": \"\",\n" +
            "    \"excluded_user_agents\": \"\",\n" +
            "    \"excluded_referrers\": \"\",\n" +
            "    \"group\": \"\",\n" +
            "    \"type\": \"website\",\n" +
            "    \"keep_url_fragment\": 0,\n" +
            "    \"creator_login\": \"nathan\",\n" +
            "    \"timezone_name\": \"France\",\n" +
            "    \"currency_name\": \"Euro\"\n" +
            "  }]";

        const deserializedData = MatomoSiteCollection.fromJSON(sampleJson);
        expect(deserializedData).toBeDefined();
        expect(deserializedData.sites.length).toBe(2);

        expect(deserializedData.sites[0].idsite).toBe(1);

    });
});

describe('MatomoVisitSummary', () => {
    it('should deserialize JSON correctly', () => {
        const sampleJson = "{\n" +
            "  \"nb_uniq_visitors\": 7,\n" +
            "  \"nb_users\": 0,\n" +
            "  \"nb_visits\": 7,\n" +
            "  \"nb_actions\": 7,\n" +
            "  \"nb_visits_converted\": 0,\n" +
            "  \"bounce_count\": 7,\n" +
            "  \"sum_visit_length\": 0,\n" +
            "  \"max_actions\": 1,\n" +
            "  \"bounce_rate\": \"100 %\",\n" +
            "  \"nb_actions_per_visit\": 1,\n" +
            "  \"avg_time_on_site\": 0\n" +
            "}";

        const deserializedData = MatomoVisitSummary.fromJSON(sampleJson);
        expect(deserializedData).toBeDefined();
        expect(deserializedData.nb_uniq_visitors).toBe(7);

    });
});

describe('MatomoVisitFrequency', () => {
    it('should deserialize JSON correctly', () => {
        const sampleJson = "{\n" +
            "  \"nb_uniq_visitors_new\": 7,\n" +
            "  \"nb_users_new\": 0,\n" +
            "  \"nb_visits_new\": 7,\n" +
            "  \"nb_actions_new\": 7,\n" +
            "  \"nb_visits_converted_new\": 0,\n" +
            "  \"bounce_count_new\": 7,\n" +
            "  \"sum_visit_length_new\": 0,\n" +
            "  \"max_actions_new\": 1,\n" +
            "  \"bounce_rate_new\": \"100 %\",\n" +
            "  \"nb_actions_per_visit_new\": 1,\n" +
            "  \"avg_time_on_site_new\": 0,\n" +
            "  \"nb_uniq_visitors_returning\": 0,\n" +
            "  \"nb_users_returning\": 0,\n" +
            "  \"nb_visits_returning\": 0,\n" +
            "  \"nb_actions_returning\": 0,\n" +
            "  \"nb_visits_converted_returning\": 0,\n" +
            "  \"bounce_count_returning\": 0,\n" +
            "  \"sum_visit_length_returning\": 0,\n" +
            "  \"max_actions_returning\": 0,\n" +
            "  \"bounce_rate_returning\": \"0 %\",\n" +
            "  \"nb_actions_per_visit_returning\": 0,\n" +
            "  \"avg_time_on_site_returning\": 0\n" +
            "}";

        const deserializedData = MatomoVisitFrequency.fromJSON(sampleJson);
        expect(deserializedData).toBeDefined();
        expect(deserializedData.nb_uniq_visitors_new).toBe(7);

    });
});

describe('MatomoCountry', () => {
    it('should deserialize JSON correctly', () => {
        const sampleJson = "  {\n" +
            "    \"label\": \"États-Unis\",\n" +
            "    \"nb_visits\": 3,\n" +
            "    \"nb_actions\": 3,\n" +
            "    \"max_actions\": 1,\n" +
            "    \"sum_visit_length\": 0,\n" +
            "    \"bounce_count\": 3,\n" +
            "    \"nb_visits_converted\": 0,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 3,\n" +
            "    \"sum_daily_nb_users\": 0,\n" +
            "    \"code\": \"us\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/flags/us.png\",\n" +
            "    \"segment\": \"countryCode==us\",\n" +
            "    \"logoHeight\": 16\n" +
            "  }";

        const deserializedData = MatomoCountry.fromJSON(sampleJson);

        expect(deserializedData).toBeDefined();
        expect(deserializedData.nb_visits).toBe(3);
    });
    it('should deserialize JSON correctly', () => {
        const sampleJson = "[\n" +
            "  {\n" +
            "    \"label\": \"États-Unis\",\n" +
            "    \"nb_visits\": 3,\n" +
            "    \"nb_actions\": 3,\n" +
            "    \"max_actions\": 1,\n" +
            "    \"sum_visit_length\": 0,\n" +
            "    \"bounce_count\": 3,\n" +
            "    \"nb_visits_converted\": 0,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 3,\n" +
            "    \"sum_daily_nb_users\": 0,\n" +
            "    \"code\": \"us\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/flags/us.png\",\n" +
            "    \"segment\": \"countryCode==us\",\n" +
            "    \"logoHeight\": 16\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Espagne\",\n" +
            "    \"nb_visits\": 1,\n" +
            "    \"nb_actions\": 1,\n" +
            "    \"max_actions\": 1,\n" +
            "    \"sum_visit_length\": 0,\n" +
            "    \"bounce_count\": 1,\n" +
            "    \"nb_visits_converted\": 0,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_nb_users\": 0,\n" +
            "    \"code\": \"es\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/flags/es.png\",\n" +
            "    \"segment\": \"countryCode==es\",\n" +
            "    \"logoHeight\": 16\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"France\",\n" +
            "    \"nb_visits\": 1,\n" +
            "    \"nb_actions\": 1,\n" +
            "    \"max_actions\": 1,\n" +
            "    \"sum_visit_length\": 0,\n" +
            "    \"bounce_count\": 1,\n" +
            "    \"nb_visits_converted\": 0,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_nb_users\": 0,\n" +
            "    \"code\": \"fr\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/flags/fr.png\",\n" +
            "    \"segment\": \"countryCode==fr\",\n" +
            "    \"logoHeight\": 16\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Indonésie\",\n" +
            "    \"nb_visits\": 1,\n" +
            "    \"nb_actions\": 1,\n" +
            "    \"max_actions\": 1,\n" +
            "    \"sum_visit_length\": 0,\n" +
            "    \"bounce_count\": 1,\n" +
            "    \"nb_visits_converted\": 0,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_nb_users\": 0,\n" +
            "    \"code\": \"id\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/flags/id.png\",\n" +
            "    \"segment\": \"countryCode==id\",\n" +
            "    \"logoHeight\": 16\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Tchéquie\",\n" +
            "    \"nb_visits\": 1,\n" +
            "    \"nb_actions\": 1,\n" +
            "    \"max_actions\": 1,\n" +
            "    \"sum_visit_length\": 0,\n" +
            "    \"bounce_count\": 1,\n" +
            "    \"nb_visits_converted\": 0,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_nb_users\": 0,\n" +
            "    \"code\": \"cz\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/flags/cz.png\",\n" +
            "    \"segment\": \"countryCode==cz\",\n" +
            "    \"logoHeight\": 16\n" +
            "  }\n" +
            "]";

        const deserializedData = MatomoCountryCollection.fromJSON(sampleJson);
        expect(deserializedData).toBeDefined();
        expect(deserializedData.countries.length).toBe(5);

        expect(deserializedData.countries[0].label).toBe("États-Unis");
    });
});


describe('MatomoDevice', () => {
    it('should deserialize JSON correctly', () => {
        const sampleJson ="{\n" +
            "    \"label\": \"Bureau\",\n" +
            "    \"nb_visits\": 7,\n" +
            "    \"nb_actions\": 7,\n" +
            "    \"max_actions\": 1,\n" +
            "    \"sum_visit_length\": 0,\n" +
            "    \"bounce_count\": 7,\n" +
            "    \"nb_visits_converted\": 0,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 7,\n" +
            "    \"sum_daily_nb_users\": 0,\n" +
            "    \"segment\": \"deviceType==desktop\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/desktop.png\"\n" +
            "  }";

        const deserializedData = MatomoDevice.fromJSON(sampleJson);

        expect(deserializedData).toBeDefined();
        expect(deserializedData.nb_visits).toBe(7);
    });
    it('should deserialize JSON correctly', () => {
        const sampleJson ="[\n" +
            "  {\n" +
            "    \"label\": \"Bureau\",\n" +
            "    \"nb_visits\": 7,\n" +
            "    \"nb_actions\": 7,\n" +
            "    \"max_actions\": 1,\n" +
            "    \"sum_visit_length\": 0,\n" +
            "    \"bounce_count\": 7,\n" +
            "    \"nb_visits_converted\": 0,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 7,\n" +
            "    \"sum_daily_nb_users\": 0,\n" +
            "    \"segment\": \"deviceType==desktop\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/desktop.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Affichage intelligent\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==smart+display\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/smart_display.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Caméra\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==camera\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/camera.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Console\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==console\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/console.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Fonctionnalité téléphone\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==feature+phone\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/feature_phone.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Haut-parleur intelligent\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==smart+speaker\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/smart_speaker.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Lecteur de medias portable\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==portable+media+player\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/portable_media_player.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Navigateur de voiture\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==car+browser\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/car_browser.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Phablette\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==phablet\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/phablet.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Portable\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==wearable\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/wearable.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Périphérique\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==peripheral\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/peripheral.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Tablette\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==tablet\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/tablet.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"TV\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==tv\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/tv.png\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \"Téléphone intelligent (smartphone)\",\n" +
            "    \"nb_visits\": 0,\n" +
            "    \"segment\": \"deviceType==smartphone\",\n" +
            "    \"logo\": \"plugins/Morpheus/icons/dist/devices/smartphone.png\"\n" +
            "  }\n" +
            "]";

        const deserializedData = MatomoDeviceCollection.fromJSON(sampleJson);
        expect(deserializedData).toBeDefined();
        expect(deserializedData.devices.length).toBe(14);

        expect(deserializedData.devices[0].nb_visits).toBe(7);
    });
});

describe('MatomoPagesTitles', () => {
    it('should deserialize JSON correctly', () => {
        const sampleJson ="{\n" +
            "    \"label\": \" Biocide Systèmes\",\n" +
            "    \"nb_visits\": 4,\n" +
            "    \"nb_hits\": 4,\n" +
            "    \"sum_time_spent\": 0,\n" +
            "    \"nb_hits_with_time_network\": 2,\n" +
            "    \"min_time_network\": \"0.2060\",\n" +
            "    \"max_time_network\": \"0.3230\",\n" +
            "    \"nb_hits_with_time_server\": 2,\n" +
            "    \"min_time_server\": \"0.1680\",\n" +
            "    \"max_time_server\": \"0.2600\",\n" +
            "    \"nb_hits_with_time_transfer\": 2,\n" +
            "    \"min_time_transfer\": \"0.0800\",\n" +
            "    \"max_time_transfer\": \"0.0980\",\n" +
            "    \"nb_hits_with_time_dom_processing\": 2,\n" +
            "    \"min_time_dom_processing\": \"0.4960\",\n" +
            "    \"max_time_dom_processing\": \"0.8400\",\n" +
            "    \"entry_nb_visits\": 4,\n" +
            "    \"entry_nb_actions\": 4,\n" +
            "    \"entry_sum_visit_length\": 0,\n" +
            "    \"entry_bounce_count\": 4,\n" +
            "    \"exit_nb_visits\": 4,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 4,\n" +
            "    \"sum_daily_entry_nb_uniq_visitors\": 4,\n" +
            "    \"sum_daily_exit_nb_uniq_visitors\": 4,\n" +
            "    \"avg_time_network\": 0.265,\n" +
            "    \"avg_time_server\": 0.214,\n" +
            "    \"avg_time_transfer\": 0.089,\n" +
            "    \"avg_time_dom_processing\": 0.668,\n" +
            "    \"avg_page_load_time\": 1.236,\n" +
            "    \"avg_time_on_page\": 0,\n" +
            "    \"bounce_rate\": \"100 %\",\n" +
            "    \"exit_rate\": \"100 %\",\n" +
            "    \"segment\": \"pageTitle==Biocide%2BSyst%25C3%25A8mes\"\n" +
            "  }";

        const deserializedData = MatomoPageTitles.fromJSON(sampleJson);

        expect(deserializedData).toBeDefined();
        expect(deserializedData.nb_visits).toBe(4);
    });

    it('should deserialize JSON correctly', () => {
        const sampleJson = "[\n" +
            "  {\n" +
            "    \"label\": \" Biocide Systèmes\",\n" +
            "    \"nb_visits\": 4,\n" +
            "    \"nb_hits\": 4,\n" +
            "    \"sum_time_spent\": 0,\n" +
            "    \"nb_hits_with_time_network\": 2,\n" +
            "    \"min_time_network\": \"0.2060\",\n" +
            "    \"max_time_network\": \"0.3230\",\n" +
            "    \"nb_hits_with_time_server\": 2,\n" +
            "    \"min_time_server\": \"0.1680\",\n" +
            "    \"max_time_server\": \"0.2600\",\n" +
            "    \"nb_hits_with_time_transfer\": 2,\n" +
            "    \"min_time_transfer\": \"0.0800\",\n" +
            "    \"max_time_transfer\": \"0.0980\",\n" +
            "    \"nb_hits_with_time_dom_processing\": 2,\n" +
            "    \"min_time_dom_processing\": \"0.4960\",\n" +
            "    \"max_time_dom_processing\": \"0.8400\",\n" +
            "    \"entry_nb_visits\": 4,\n" +
            "    \"entry_nb_actions\": 4,\n" +
            "    \"entry_sum_visit_length\": 0,\n" +
            "    \"entry_bounce_count\": 4,\n" +
            "    \"exit_nb_visits\": 4,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 4,\n" +
            "    \"sum_daily_entry_nb_uniq_visitors\": 4,\n" +
            "    \"sum_daily_exit_nb_uniq_visitors\": 4,\n" +
            "    \"avg_time_network\": 0.265,\n" +
            "    \"avg_time_server\": 0.214,\n" +
            "    \"avg_time_transfer\": 0.089,\n" +
            "    \"avg_time_dom_processing\": 0.668,\n" +
            "    \"avg_page_load_time\": 1.236,\n" +
            "    \"avg_time_on_page\": 0,\n" +
            "    \"bounce_rate\": \"100 %\",\n" +
            "    \"exit_rate\": \"100 %\",\n" +
            "    \"segment\": \"pageTitle==Biocide%2BSyst%25C3%25A8mes\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \" Contact - Biocide Systèmes\",\n" +
            "    \"nb_visits\": 1,\n" +
            "    \"nb_hits\": 1,\n" +
            "    \"sum_time_spent\": 0,\n" +
            "    \"nb_hits_with_time_network\": 1,\n" +
            "    \"min_time_network\": \"0.3480\",\n" +
            "    \"max_time_network\": \"0.3480\",\n" +
            "    \"nb_hits_with_time_server\": 1,\n" +
            "    \"min_time_server\": \"0.3300\",\n" +
            "    \"max_time_server\": \"0.3300\",\n" +
            "    \"nb_hits_with_time_transfer\": 1,\n" +
            "    \"min_time_transfer\": \"0.1420\",\n" +
            "    \"max_time_transfer\": \"0.1420\",\n" +
            "    \"nb_hits_with_time_dom_processing\": 1,\n" +
            "    \"min_time_dom_processing\": \"0.5500\",\n" +
            "    \"max_time_dom_processing\": \"0.5500\",\n" +
            "    \"entry_nb_visits\": 1,\n" +
            "    \"entry_nb_actions\": 1,\n" +
            "    \"entry_sum_visit_length\": 0,\n" +
            "    \"entry_bounce_count\": 1,\n" +
            "    \"exit_nb_visits\": 1,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_entry_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_exit_nb_uniq_visitors\": 1,\n" +
            "    \"avg_time_network\": 0.348,\n" +
            "    \"avg_time_server\": 0.33,\n" +
            "    \"avg_time_transfer\": 0.142,\n" +
            "    \"avg_time_dom_processing\": 0.55,\n" +
            "    \"avg_page_load_time\": 1.37,\n" +
            "    \"avg_time_on_page\": 0,\n" +
            "    \"bounce_rate\": \"100 %\",\n" +
            "    \"exit_rate\": \"100 %\",\n" +
            "    \"segment\": \"pageTitle==Contact%2B-%2BBiocide%2BSyst%25C3%25A8mes\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \" Mentions légales - Biocide Systèmes\",\n" +
            "    \"nb_visits\": 1,\n" +
            "    \"nb_hits\": 1,\n" +
            "    \"sum_time_spent\": 0,\n" +
            "    \"nb_hits_with_time_network\": 1,\n" +
            "    \"min_time_network\": \"0.2660\",\n" +
            "    \"max_time_network\": \"0.2660\",\n" +
            "    \"nb_hits_with_time_server\": 1,\n" +
            "    \"min_time_server\": \"0.2680\",\n" +
            "    \"max_time_server\": \"0.2680\",\n" +
            "    \"nb_hits_with_time_transfer\": 1,\n" +
            "    \"min_time_transfer\": \"0.1140\",\n" +
            "    \"max_time_transfer\": \"0.1140\",\n" +
            "    \"nb_hits_with_time_dom_processing\": 1,\n" +
            "    \"min_time_dom_processing\": \"0.7010\",\n" +
            "    \"max_time_dom_processing\": \"0.7010\",\n" +
            "    \"entry_nb_visits\": 1,\n" +
            "    \"entry_nb_actions\": 1,\n" +
            "    \"entry_sum_visit_length\": 0,\n" +
            "    \"entry_bounce_count\": 1,\n" +
            "    \"exit_nb_visits\": 1,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_entry_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_exit_nb_uniq_visitors\": 1,\n" +
            "    \"avg_time_network\": 0.266,\n" +
            "    \"avg_time_server\": 0.268,\n" +
            "    \"avg_time_transfer\": 0.114,\n" +
            "    \"avg_time_dom_processing\": 0.701,\n" +
            "    \"avg_page_load_time\": 1.349,\n" +
            "    \"avg_time_on_page\": 0,\n" +
            "    \"bounce_rate\": \"100 %\",\n" +
            "    \"exit_rate\": \"100 %\",\n" +
            "    \"segment\": \"pageTitle==Mentions%2Bl%25C3%25A9gales%2B-%2BBiocide%2BSyst%25C3%25A8mes\"\n" +
            "  },\n" +
            "  {\n" +
            "    \"label\": \" Notre expertise - Biocide Systèmes\",\n" +
            "    \"nb_visits\": 1,\n" +
            "    \"nb_hits\": 1,\n" +
            "    \"sum_time_spent\": 0,\n" +
            "    \"nb_hits_with_time_network\": 1,\n" +
            "    \"min_time_network\": \"0.2560\",\n" +
            "    \"max_time_network\": \"0.2560\",\n" +
            "    \"nb_hits_with_time_server\": 1,\n" +
            "    \"min_time_server\": \"0.9850\",\n" +
            "    \"max_time_server\": \"0.9850\",\n" +
            "    \"nb_hits_with_time_transfer\": 1,\n" +
            "    \"min_time_transfer\": \"0.0970\",\n" +
            "    \"max_time_transfer\": \"0.0970\",\n" +
            "    \"nb_hits_with_time_dom_processing\": 1,\n" +
            "    \"min_time_dom_processing\": \"0.5260\",\n" +
            "    \"max_time_dom_processing\": \"0.5260\",\n" +
            "    \"entry_nb_visits\": 1,\n" +
            "    \"entry_nb_actions\": 1,\n" +
            "    \"entry_sum_visit_length\": 0,\n" +
            "    \"entry_bounce_count\": 1,\n" +
            "    \"exit_nb_visits\": 1,\n" +
            "    \"sum_daily_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_entry_nb_uniq_visitors\": 1,\n" +
            "    \"sum_daily_exit_nb_uniq_visitors\": 1,\n" +
            "    \"avg_time_network\": 0.256,\n" +
            "    \"avg_time_server\": 0.985,\n" +
            "    \"avg_time_transfer\": 0.097,\n" +
            "    \"avg_time_dom_processing\": 0.526,\n" +
            "    \"avg_page_load_time\": 1.864,\n" +
            "    \"avg_time_on_page\": 0,\n" +
            "    \"bounce_rate\": \"100 %\",\n" +
            "    \"exit_rate\": \"100 %\",\n" +
            "    \"segment\": \"pageTitle==Notre%2Bexpertise%2B-%2BBiocide%2BSyst%25C3%25A8mes\"\n" +
            "  }\n" +
            "]";

        const deserializedData = MatomoPageTitlesCollection.fromJSON(sampleJson);
        expect(deserializedData).toBeDefined();
        expect(deserializedData.pages.length).toBe(4);

        expect(deserializedData.pages[0].nb_visits).toBe(4);
    });
});
describe('MatomoReferrer', () => {
    it('should deserialize JSON correctly', () => {
        const sampleJson = " {\n" +
            "      \"label\": \"Entrées directes\",\n" +
            "      \"nb_visits\": 7,\n" +
            "      \"nb_actions\": 7,\n" +
            "      \"max_actions\": 1,\n" +
            "      \"sum_visit_length\": 0,\n" +
            "      \"bounce_count\": 7,\n" +
            "      \"nb_visits_converted\": 0,\n" +
            "      \"sum_daily_nb_uniq_visitors\": 7,\n" +
            "      \"sum_daily_nb_users\": 0,\n" +
            "      \"segment\": \"referrerType==direct\",\n" +
            "      \"referrer_type\": 1\n" +
            "    }";

        const deserializedData = MatomoReferrer.fromJSON(sampleJson);

        expect(deserializedData).toBeDefined();
        expect(deserializedData.nb_visits).toBe(7);
    });

    it('should deserialize JSON correctly', () => {
        const sampleJson = "[\n" +
            "    {\n" +
            "      \"label\": \"Entrées directes\",\n" +
            "      \"nb_visits\": 7,\n" +
            "      \"nb_actions\": 7,\n" +
            "      \"max_actions\": 1,\n" +
            "      \"sum_visit_length\": 0,\n" +
            "      \"bounce_count\": 7,\n" +
            "      \"nb_visits_converted\": 0,\n" +
            "      \"sum_daily_nb_uniq_visitors\": 7,\n" +
            "      \"sum_daily_nb_users\": 0,\n" +
            "      \"segment\": \"referrerType==direct\",\n" +
            "      \"referrer_type\": 1\n" +
            "    }\n" +
            "  ]";

        const deserializedData = MatomoReferrerCollection.fromJSON(sampleJson);
        expect(deserializedData).toBeDefined();
        expect(deserializedData.referrers.length).toBe(4);

        expect(deserializedData.referrers[0].nb_visits).toBe(7);
    });
})
