import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, FormBuilder, FormsModule } from "@angular/forms";

import { CustomCheckboxComponent } from '../custom-checkbox/custom-checkbox.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CustomCheckboxComponent,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  inputOne = true;

  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      myFormControl: true
    });

  }
}