import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  form: FormGroup;
  formData: any[] = []; // To store form data

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      designation: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formData.push(this.form.value);
      this.form.reset();
    }
  }
}
