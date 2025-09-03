import { Component, inject, signal, WritableSignal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { PaletteComponent } from './palette/palette.component';
import { PaletteService } from '../../services/palette.service';
import { Color } from '../../color/color.model';
@Component({
    selector: 'app-home',
    imports: [LucideAngularModule, CommonModule, PaletteComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    private themeService = inject(ThemeService);

    constructor(private paletteService: PaletteService) {}

    colors: Color[] = [];

    ngOnInit() {
        this.paletteService.palette$.subscribe((palette) => {
            this.colors = palette;
        });
        this.paletteService.generateMonoPalette(5);
    }

    generateMonoPalette(count: number = 5) {
        this.paletteService.generateMonoPalette(count);
    }

    // esponi il signal al template
    theme = this.themeService.theme;

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    get knobPosition() {
        return this.theme() === 'light' ? 'left-1' : 'right-1';
    }
}
