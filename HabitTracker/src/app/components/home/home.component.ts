import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { PaletteComponent } from './palette/palette.component';
import { PaletteService } from '../../services/palette.service';
import { Color } from '../../models/color.model';
import { ThemePalette } from '../../models/themePalette.model';
import { lightPalette } from '../../models/themePalette.model';
import { darkPalette } from '../../models/themePalette.model';
@Component({
    selector: 'app-home',
    imports: [LucideAngularModule, CommonModule, PaletteComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    private themeService = inject(ThemeService);

    constructor(private paletteService: PaletteService) {}

    //Array di colori basati sulle classi Tailwind

    currentPalette!: ThemePalette;

    //Imposta i colori di sfondo casualmente
    setRandomThemeColors() {
        const palette = this.theme() === 'light' ? lightPalette : darkPalette;
        this.currentPalette = palette[Math.floor(Math.random() * palette.length)];
    }

    colors: Color[] = [];

    // esponi il signal al template
    theme = this.themeService.theme;

    copied = signal(false);

    ngOnInit() {
        this.setRandomThemeColors();
        this.paletteService.palette$.subscribe((palette) => {
            this.colors = palette;
        });
        this.paletteService.generateMonoPalette(5);
    }

    generateMonoPalette(count: number = 5) {
        this.paletteService.generateMonoPalette(count);
    }

    toggleTheme() {
        this.themeService.toggleTheme();
        this.setRandomThemeColors();
    }

    get knobPosition() {
        return this.theme() === 'light' ? 'left-1' : 'right-1';
    }

    copyText(color: Color) {
        navigator.clipboard.writeText(color.hex);
        color.copied?.set(true);
        setTimeout(() => color.copied!.set(false), 800);
    }
}
