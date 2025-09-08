import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Check, Copy, CopyCheck, LucideAngularModule, Moon, Plus, Repeat, Shuffle, Sun } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Plus,
        Moon,
        Sun,
        Copy,
        Check,
        Shuffle,
        Repeat,
      })
    ),
  ],
};
