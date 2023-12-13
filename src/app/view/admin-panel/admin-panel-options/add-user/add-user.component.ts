import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AdminPanelComponent} from "../../admin-panel.component";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AdminPanelComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  form: FormGroup;

  constructor( private fb: FormBuilder) {
    this.form = this.fb.group({
      voornaam: ['', Validators.required],
      achternaam: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      wachtwoord: ['', [Validators.required, Validators.minLength(8)]],
      rol: ['false', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Handle your form submission logic here, like sending it to a backend
    }

  }
}
