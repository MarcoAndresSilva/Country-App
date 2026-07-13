import { Component, inject, input, linkedSignal, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-by-region-page.component',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  countryService = inject(CountryService);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ]

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)
  queryParam = (this.activatedRoute.snapshot.queryParamMap.get('region') ?? '') as Region;

  selectedRegion = linkedSignal<Region>(() => this.queryParam ?? 'Americas');

  countryResource = rxResource({
    request: () => ({ region: this.selectedRegion() }),
    loader: ({ request }) => {
      if (!request.region) return of([]);
      this.router.navigate(['/country/by-region'], {
        queryParams: {
          query: request.region,
          "Hola": "Mundo"
        }
      })
      return this.countryService.searchByRegion(request.region);
    },
  });
}
