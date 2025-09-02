import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'
import { CommonModule } from '@angular/common'
@Component({
    selector: 'app-home',
    imports: [LucideAngularModule, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
