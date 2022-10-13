import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
  
  onSubmit(): void {
    console.log("envia credenciales");
    }

  initForm (): FormGroup{
    return this.fb.group({
      cedula: ['',[Validators.required]],
      clave: ['',[Validators.required]]
    })

  }
}