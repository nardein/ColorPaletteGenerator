import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  Check,
  CircleX,
  Copy,
  CopyCheck,
  Download,
  LucideAngularModule,
  Minus,
  Moon,
  Plus,
  PlusIcon,
  Repeat,
  Settings,
  Settings2,
  Shuffle,
  Sun,
} from 'lucide-angular';

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
        Settings2,
        Download,
        CircleX,
        PlusIcon,
        Minus,
      })
    ),
  ],
};
