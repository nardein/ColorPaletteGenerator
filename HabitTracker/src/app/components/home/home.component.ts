import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { PaletteService } from '../../services/palette.service';
import { Color } from '../../models/color.model';
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

  selectedMethod: 'random' | 'monocromatic' | 'analogus' | 'complementary' = 'monocromatic';

  paletteCount: number = 5;

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
    this.generatePalette(5);
  }

  //Imposta i colori di sfondo casualmente
  setRandomThemeColors() {
    const palette = this.themeService.theme() === 'light' ? lightPalette : darkPalette;
    this.themeService.currentPalette.set(palette[Math.floor(Math.random() * palette.length)]);
  }

  //Genera la palette monocromatica
  generateMonoPalette(paletteCount: number) {
    this.paletteService.generateMonoPalette(paletteCount);
  }

  //Genera la palette random
  generateRandomPalette(paletteCount: number) {
    this.paletteService.generateRandomPalette(paletteCount);
  }

  //Genera una palette analoga
  generateAnalogusPalette(paletteCount: number) {
    this.paletteService.generateAnalogousPalette(paletteCount);
  }

  //Generate complementaryPalette
  generateComplementaryPalette(paletteCount: number) {
    this.paletteService.generateComplementaryPalette(paletteCount);
  }

  generatePalette(paletteCount: number) {
    switch (this.selectedMethod) {
      case 'random':
        this.generateRandomPalette(paletteCount);
        break;
      case 'monocromatic':
        this.generateMonoPalette(paletteCount);
        break;
      case 'analogus':
        this.generateAnalogusPalette(paletteCount);
        break;
      case 'complementary':
        this.generateComplementaryPalette(paletteCount);
        break;
    }
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

  incrementCount() {
    if (this.paletteCount < 10) {
      this.paletteCount++;
      this.generatePalette(this.paletteCount);
    }
  }

  decrementCount() {
    if (this.paletteCount > 2) {
      this.paletteCount--;
      this.generatePalette(this.paletteCount);
    }
  }
}
