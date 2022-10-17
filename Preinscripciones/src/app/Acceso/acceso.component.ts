import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
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
      mail: ['', [Validators.required]],
      cedula: ['', [Validators.required]]
    })
  }

}
