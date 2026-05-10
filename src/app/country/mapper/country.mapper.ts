import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  // Static RestCountry => Country {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flags.png,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      capital: restCountry.capital ? restCountry.capital[0] : 'N/A',
      population: restCountry.population,
    };
  }

  // Static RestCountry[] => Country[] {
  static mapRestCountryArrayToCountryArray(
    restCountries: RESTCountry[],
  ): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
