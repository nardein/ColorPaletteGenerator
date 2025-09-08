import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { PaletteService } from '../../services/palette.service';
import { Color } from '../../models/color.model';
import { ThemePalette } from '../../models/themePalette.model';
import { lightPalette } from '../../models/themePalette.model';
import { darkPalette } from '../../models/themePalette.model';
import { defaultLightPalette } from '../../models/themePalette.model';
import { defaultDarkPalette } from '../../models/themePalette.model';
import { HeaderComponent } from './header/header.component';
import { PaletteGridComponent } from './palette-grid/palette-grid.component';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, CommonModule, FormsModule, HeaderComponent, PaletteGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private paletteService: PaletteService,
    public themeService: ThemeService
  ) {}

  colors: Color[] = [];

  //signal per copiare il testo
  copied = signal(false);

  isRandomPaletteActive = false;

  ngOnInit() {
    // Imposta la palette iniziale in base allo stato del toggle
    if (this.isRandomPaletteActive) {
      this.setRandomThemeColors();
    } else {
      this.themeService.theme() === 'light' ? defaultLightPalette : defaultDarkPalette;
    }
    this.paletteService.palette$.subscribe((palette) => {
      this.colors = palette;
    });
    this.paletteService.generateMonoPalette(5);
  }

  //Imposta i colori di sfondo casualmente
  setRandomThemeColors() {
    const palette = this.themeService.theme() === 'light' ? lightPalette : darkPalette;
    this.themeService.currentPalette.set(palette[Math.floor(Math.random() * palette.length)]);
  }

  //Genera la palette monocromatica
  generateMonoPalette(count: number = 5) {
    this.paletteService.generateMonoPalette(count);
  }

  //Genera la palette random
  generateRandomPalette(count: number = 5) {
    this.paletteService.generateRandomPalette(count);
  }

  //Attima il tema dark/light
  toggleTheme() {
    this.themeService.toggleTheme();

    if (this.isRandomPaletteActive) {
      this.setRandomThemeColors();
    } else {
      this.themeService.theme() === 'light' ? defaultLightPalette : defaultDarkPalette;
    }
  }

  //Toggle per default o random palette del sito
  toggleRandomPalette() {
    if (this.isRandomPaletteActive) {
      this.setRandomThemeColors();
    } else {
      this.themeService.theme() === 'light' ? defaultLightPalette : defaultDarkPalette;
    }
  }

  get knobPosition() {
    return this.themeService.theme() === 'light' ? 'left-1' : 'right-1';
  }
}
