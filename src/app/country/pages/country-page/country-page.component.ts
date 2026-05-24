import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-page',
  imports: [],
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
