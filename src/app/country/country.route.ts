import { CountryLayoutComponent } from './layout/CountryLayout/CountryLayout.component';
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

export const countryRoutes: Routes = [
    {
        path: '',
        component: CountryLayoutComponent,
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPageComponent
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            }
        ]
    },
//     {
//         path: 'country',
//         loadChildren:() => import('./country/country.routes'),
//     },
//     {
//         path: '**',
//         redirectTo: ''
//     }
];

export default countryRoutes;