import { Component, Signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
    ReactiveFormsModule,
    FormGroup,
    Validators,
    FormBuilder,
} from '@angular/forms'
@Component({
    selector: 'app-habit-form-component',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './habit-form-component.html',
    styleUrl: './habit-form-component.scss',
})
export class HabitFormComponent {}
