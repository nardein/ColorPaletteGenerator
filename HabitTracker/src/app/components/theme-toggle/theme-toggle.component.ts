import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import {
  darkPalette,
  defaultDarkPalette,
  defaultLightPalette,
  lightPalette,
  ThemePalette,
} from '../../models/themePalette.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  //Palette di colori basati sulle classi Tailwind
  constructor(public themeService: ThemeService) {}

  isRandomPaletteActive = false;

  //Imposta i colori di sfondo casualmente
  setRandomThemeColors() {
    const palette = this.themeService.theme() === 'light' ? lightPalette : darkPalette;
    this.themeService.currentPalette.set(palette[Math.floor(Math.random() * palette.length)]);
  }

  //Attima il tema dark/light
  toggleTheme() {
    this.themeService.toggleTheme();

    if (this.isRandomPaletteActive) {
      this.setRandomThemeColors();
    } else {
      const defPalette = this.themeService.theme() === 'light' ? defaultLightPalette : defaultDarkPalette;
      this.themeService.currentPalette.set(defPalette);
    }
  }

  //Toggle per default o random palette del sito
  toggleRandomPalette() {
    if (this.isRandomPaletteActive) {
      this.setRandomThemeColors();
    } else {
      const defaultPalette = this.themeService.theme() === 'light' ? defaultLightPalette : defaultDarkPalette;
      this.themeService.currentPalette.set(defaultPalette);
    }
  }

  get knobPosition() {
    return this.themeService.theme() === 'light' ? 'left-1' : 'right-1';
  }
}
