import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaletteService } from '../../../services/palette.service';
import { Color } from '../../../models/color.model';
@Component({
    selector: 'app-palette',
    imports: [CommonModule],
    templateUrl: './palette.component.html',
    styleUrl: './palette.component.scss',
})
export class PaletteComponent {
    colors: Color[] = [];

    constructor(private paletteService: PaletteService) {}

    ngOnInit(): void {
        this.paletteService.palette$.subscribe((palette) => {
            this.colors = palette;
        });
    }

    onGeneratePalette() {
        this.paletteService.generateMonoPalette();
    }
}
