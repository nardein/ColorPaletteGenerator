import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { PaletteService } from '../../../services/palette.service';
import {
  darkPalette,
  defaultDarkPalette,
  defaultLightPalette,
  lightPalette,
  ThemePalette,
} from '../../../models/themePalette.model';
import { Color } from '../../../models/color.model';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../../theme-toggle/theme-toggle.component';
@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, FormsModule, CommonModule, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}
}
