import { Component, inject } from '@angular/core';
import { PaletteService } from '../../../services/palette.service';
import { Color } from '../../../models/color.model';
import { LucideAngularModule } from 'lucide-angular';
import { defaultDarkPalette, defaultLightPalette, ThemePalette } from '../../../models/themePalette.model';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
@Component({
  selector: 'app-palette-grid',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './palette-grid.component.html',
  styleUrl: './palette-grid.component.scss',
})
export class PaletteGridComponent {
  ngOnInit() {
    this.paletteService.palette$.subscribe((palette) => {
      this.colors = palette;
    });
  }

  private paletteService = inject(PaletteService);
  private themeService = inject(ThemeService);
  currentPalette = this.themeService.currentPalette; /* === 'light' ? defaultLightPalette : defaultDarkPalette; */
  theme = this.themeService.theme;

  colors: Color[] = [];

  //Genera la palette monocromatica
  generateMonoPalette(count: number = 5) {
    this.paletteService.generateMonoPalette(count);
  }

  //Genera la palette random
  generateRandomPalette(count: number = 5) {
    this.paletteService.generateRandomPalette(count);
  }

  //Copia il testo nella clipboard
  copyText(color: Color) {
    navigator.clipboard.writeText(color.hex);
    color.copied?.set(true);
    setTimeout(() => color.copied!.set(false), 800);
  }
}
