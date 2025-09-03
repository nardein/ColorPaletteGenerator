import { Component, inject } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'
import { CommonModule } from '@angular/common'
import { ThemeService } from '../../services/theme.service'
@Component({
    selector: 'app-home',
    imports: [LucideAngularModule, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    private themeService = inject(ThemeService)

    // esponi il signal al template
    theme = this.themeService.theme

    toggleTheme() {
        this.themeService.toggleTheme()
    }

    get knobPosition() {
        return this.theme() === 'light' ? 'left-1' : 'right-1'
    }
}
