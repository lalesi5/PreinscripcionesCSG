import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  dataForm: FormGroup;
  
  constructor(private readonly fb: FormBuilder) {
    this.dataForm = this.fb.group({
      cedula: ['',[Validators.required]],
      email: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {

  }

  onSubmit(): void {
  console.log("envia credenciales");
  }

  



}
