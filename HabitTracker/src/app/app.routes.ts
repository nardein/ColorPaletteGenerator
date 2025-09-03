import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
    },
    {
        path: 'Home',
        loadComponent: () =>
            import('./components/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'Palette',
        loadComponent: () =>
            import('./components/home/palette/palette.component').then((m) => m.PaletteComponent),
    },
];
