import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
    },
    {
        path: 'Home',
        loadComponent: () =>
            import('./home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'HabitFormComponent',
        loadComponent: () =>
            import('./habit-form/habit-form-component').then(
                (m) => m.HabitFormComponent
            ),
    },
]
