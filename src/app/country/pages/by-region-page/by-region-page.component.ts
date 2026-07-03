import { Component, input } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
@Component({
  selector: 'app-by-region-page.component',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ]
}
