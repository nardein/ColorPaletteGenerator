import { Injectable, signal } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    theme = signal<'light' | 'dark'>('light')

    constructor() {
        // Leggi la preferenza salvata
        const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
        if (saved) {
            this.theme.set(saved)
            document.documentElement.setAttribute('data-theme', saved)
        }
    }

    toggleTheme() {
        const newTheme = this.theme() === 'light' ? 'dark' : 'light'
        this.theme.set(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }
}
