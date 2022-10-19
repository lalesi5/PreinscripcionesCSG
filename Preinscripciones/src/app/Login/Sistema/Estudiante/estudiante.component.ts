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

  //RADIO BUTTON
  //favoriteSeason: string | undefined ;
  //seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


  myModel = 1;


  //ERROR DE APELLIDOS

    lastNameStudent = new FormControl('', [Validators.required]);


  //ERROR DE NOMBRE
    nameStudent = new FormControl('', Validators.required)

  /*ERROR DE EMAIL
  email = new FormControl('', [Validators.required, Validators.email]);*/

  //ERROR FECHA

  dateStudent = new FormControl('', Validators.required)

//ERROR CON QUINES VIVE

  homeStudent = new FormControl('', Validators.required)

//ERROR CON CI

  studentCI = new FormControl('', Validators.required)

//ERROR NIVEL AL QUE APLICA

  studentLevel = new FormControl('', Validators.required)


//ERROR INSTITUCION ANTERIOR

  studentInstitution = new FormControl('', Validators.required)


  //ERROR DIRECCION ESTUDIANTE

  studentAddress = new FormControl ('', Validators.required)

//ERROR  CELULAR1 ESTUDIANTE
  studentPhone1 = new FormControl ('', Validators.required)
  studentPhone2 = new FormControl ('', Validators.required)

//ERROR SUBIR CEDULA PDF

  studentCIPDF = new FormControl ('', Validators.required)
  studentPDF = new FormControl ('', Validators.required)







  getErrorMessage() {

    //MENSAJE ERROR APELLIDOS
    if (this.lastNameStudent.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.lastNameStudent.hasError('lastNameStudent') ? 'Espacio Vacio' : '';


    //MENSAJE ERROR NOMRBES
    if (this.nameStudent.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.nameStudent.hasError('nameStudent') ? 'Espacio Vacio' : '';

  //MENSAJE ERROR FECHA
    if (this.dateStudent.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.dateStudent.hasError('dateStudent') ? 'Espacio Vacio' : '';

    //MENSAJE ERROR CON QUIEN VIVES
    if (this.homeStudent.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.homeStudent.hasError('homeStudent') ? 'Espacio Vacio' : '';

  //MENSAJE ERROR CON CI
    if (this.studentCI.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.studentCI.hasError('studentCI') ? 'Espacio Vacio' : '';

    //MENSAJE ERROR NIVEL AL QUE APLICA
    if (this.studentInstitution.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.studentInstitution.hasError('studentInstitution') ? 'Espacio Vacio' : '';


  //MENSAJE ERROR INSTITUCION ANTERIOR
    if (this.studentLevel.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.studentLevel.hasError('studentLevel') ? 'Espacio Vacio' : '';


    //MENSAJE ERROR INSTITUCION ANTERIOR
    if (this.studentAddress.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.studentAddress.hasError('studentAddress') ? 'Espacio Vacio' : '';

    //MENSAJE ERROR CELULAR1
    if (this.studentPhone1.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.studentPhone1.hasError('studentPhone1') ? 'Espacio Vacio' : '';

    //MENSAJE ERROR CELULAR2
    if (this.studentPhone2.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.studentPhone2.hasError('studentPhone2') ? 'Espacio Vacio' : '';


    //MENSAJE ERROR PDF CEDULA
    if (this.studentCIPDF.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.studentCIPDF.hasError('studentCIPDF') ? 'Espacio Vacio' : '';

    //MENSAJE ERROR LIBRETA
    if (this.studentPDF.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.studentPDF.hasError('studentPDF') ? 'Espacio Vacio' : '';








    //MENSAJE ERROR EMAIL
   /* if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';*/



  }

  ngOnInit(): void {
  }

}























