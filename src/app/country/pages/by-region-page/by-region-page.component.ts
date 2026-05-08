import { Component, input } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
@Component({
  selector: 'app-by-region-page.component',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  countries = input.required<RESTCountry[]>();
}
