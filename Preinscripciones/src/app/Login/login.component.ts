import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }


  ngOnInit(): void {
    this.dataForm = this.initForm();
  }

  onSubmit (): void{
    console.log('Hola');
  }
  initForm (): FormGroup{
    return this.fb.group({
      clave: ['', [Validators.required]],
      cedula: ['', [Validators.required]]
    })
  }


}
