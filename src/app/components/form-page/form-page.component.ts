import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormPageComponent {
  contactForm: FormGroup;
  submissionSuccess: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Perform any additional actions on form submission here
      console.log('Form Submitted!', this.contactForm.value);

      // Set the success flag to true to display the alert
      this.submissionSuccess = true;

      // Optionally reset the form after submission
      this.contactForm.reset();
    } else {
      console.log('Form is invalid!');
    }
  }
}
