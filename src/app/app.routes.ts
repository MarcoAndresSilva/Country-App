import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    // {
    //     path: 'by-capital',
    //     // loadChildren: () => import('./country/pages/by-capital-page/by-capital-page.module').then( m => m.ByCapitalPageModule )
    // },
    // {
    //     path: 'by-country',
    //     // loadChildren: () => import('./country/pages/by-country-page/by-country-page.module').then( m => m.ByCountryPageModule )
    // },
    // {
    //     path: 'by-region',
    //     // loadChildren: () => import('./country/pages/by-region-page/by-region-page.module').then( m => m.ByRegionPageModule )
    // },
    // {
    //     path: 'country/:id',
    //     // loadChildren: () => import('./country/pages/country-page/country-page.module').then( m => m.CountryPageModule )
    // },
    {
        path: '**',
        redirectTo: ''
    }
];
