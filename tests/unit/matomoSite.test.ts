import { describe, it, expect } from 'vitest';
import { MatomoSiteCollection, MatomoSite } from '@/models/MatomoSite';

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
});
describe('MatomoSiteCollection', () => {
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

    })
})
