import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  resultado!: string;

  //ERROR DE APELLIDOS
  lastName = new FormControl({
    lastName: new FormControl('', [Validators.required, Validators.minLength(100)]),});


  //ERROR DE NOMBRE
  name = new FormControl({
    name: new FormControl('', [Validators.required, Validators.minLength(100)]),});

  /*ERROR DE EMAIL
  email = new FormControl('', [Validators.required, Validators.email]);*/



  getErrorMessage() {

    //MENSAJE ERROR APELLIDOS
    if (this.lastName.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.lastName.hasError('required') ? 'Espacio Vacio' : '';


    //MENSAJE ERROR NOMRBES
    if (this.name.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.name.hasError('required') ? 'Espacio Vacio' : '';


    //MENSAJE ERROR EMAIL
   /* if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';*/



  }

  ngOnInit(): void {
  }

}























