export class Country {
    name: string;
    topLevelDomain: Array<string>;
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: Array<string>;

    capital: string;
    altSpellings: Array<string>;
    region: string;
    subregion: string;
    population: number;
    latlng: Array<number>;
    demonym: string;
    area: number;
    gini: number;
    timezones: Array<string>;
    borders: Array<string>;
    nativeName: string;
    numericCode: string;
    currencies: Array<string>;
    languages: Array<string>;
    translations: object;
    relevance: string;
}
