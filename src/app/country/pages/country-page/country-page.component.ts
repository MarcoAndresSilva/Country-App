import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { ByCapitalPageComponent } from '../by-capital-page/by-capital-page.component';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found-component';
import { CountryInformationComponent } from './country-information/country-information.component';

@Component({
  selector: 'app-country-page',
  imports: [
    ByCapitalPageComponent,
    NotFoundComponent,
    CountryInformationComponent,
  ],
  templateUrl: './country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent {
  countrycode = inject(ActivatedRoute).snapshot.paramMap.get('code') || '';

  countryResource = rxResource({
    request: () => ({ code: this.countrycode }),
    loader: ({ request }) => {
      return inject(CountryService).countrySearchByAlphaCode(request.code);
    },
  });
}
