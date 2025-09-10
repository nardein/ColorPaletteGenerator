import { Injectable, signal } from '@angular/core';
import { defaultDarkPalette, defaultLightPalette, ThemePalette } from '../models/themePalette.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  //signal per sapere la mode da attivare
  theme = signal<'light' | 'dark'>('light');

  //signal per la current palette
  currentPalette = signal<ThemePalette>(defaultLightPalette);

  get bgClass() {
    return this.currentPalette().bg;
  }
  get textClass() {
    return this.currentPalette().text;
  }
  get buttonClass() {
    return this.currentPalette().button;
  }
  get toggleClass() {
    return this.currentPalette().toggle;
  }
  get containerClass() {
    return this.currentPalette().container;
  }

  constructor() {
    // Leggi la preferenza salvata
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) {
      this.theme.set(saved);
      document.documentElement.setAttribute('data-theme', saved);

      const defPalette = saved === 'light' ? defaultLightPalette : defaultDarkPalette;
      this.currentPalette.set(defPalette);
    }
  }

  toggleTheme() {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    const defPalette = newTheme === 'light' ? defaultLightPalette : defaultDarkPalette;
    this.currentPalette.set(defPalette);
  }
}
