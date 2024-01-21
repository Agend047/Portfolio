import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, FormBuilder, FormsModule } from "@angular/forms";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {


  readPolicy: boolean = false;

  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      myFormControl: true
    });

  }

  onSubmit(stuff: object) {

  }
}