import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [ReactiveFormsModule],
templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted ✅', this.contactForm.value);
      alert('Thank you for your message!');
      this.contactForm.reset();
    }
  }
}
