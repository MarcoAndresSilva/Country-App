import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, of, throwError, delay } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((response) =>
        CountryMapper.mapRestCountryArrayToCountryArray(response),
      ),
      catchError((error) => {
        console.error(' Error fetching countries by capital:', error);
        return throwError(
          () => new Error(`No se encontró ningún país con la capital ${query}`),
        );
      }),
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${API_URL}/name/${query}`;
    return this.http.get<RESTCountry[]>(url).pipe(
      map((response) =>
        CountryMapper.mapRestCountryArrayToCountryArray(response),
      ),
      delay(1000),
      catchError((error) => {
        console.error(' Error fetching countries by name:', error);
        return throwError(
          () => new Error(`No se encontró ningún país con el nombre ${query}`),
        );
      }),
    );
  }

  countrySearchByAlphaCode(code: string): Observable<Country> {
    const url = `${API_URL}/alpha/${code}`;
    return this.http.get<RESTCountry[]>(url).pipe(
      map(
        (response) =>
          CountryMapper.mapRestCountryArrayToCountryArray(response)[0],
      ),
      catchError((error) => {
        console.error(' Error fetching country by alpha code:', error);
        return throwError(
          () =>
            new Error(`No se encontró ningún país con el código alfa ${code}`),
        );
      }),
    );
  }
}
