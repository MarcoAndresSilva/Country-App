import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

export const countryRoutes: Routes = [
    {
        path: '',
        component: ByCapitalPageComponent, 
    },
    {
        path: 'country',
        // loadChildren:() => import('./country.module').then( m => m.CountryModule )
    },
    {
        path: '**',
        redirectTo: ''
    }
];
