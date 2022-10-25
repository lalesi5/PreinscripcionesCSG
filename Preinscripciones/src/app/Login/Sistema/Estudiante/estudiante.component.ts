import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  allowedChars = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));

  studentForm!: FormGroup;

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
  studentCI2 = new FormControl('', Validators.required)

  //ERROR NIVEL AL QUE APLICA
  studentLevel = new FormControl('', Validators.required)
  //ERROR INSTITUCION ANTERIOR
  studentInstitution = new FormControl('', Validators.required)
  //ERROR DIRECCION ESTUDIANTE
  studentCity = new FormControl('', Validators.required)
  studentAddress = new FormControl ('', Validators.required)
  //ERROR  CELULAR1 ESTUDIANTE
  studentPhone1 = new FormControl ('', Validators.required)
  studentPhone2 = new FormControl ('', Validators.required)
  //ERROR SUBIR CEDULA PDF
  studentCIPDF = new FormControl ('', Validators.required)
  studentPDF = new FormControl ('', Validators.required)


  toppings = this.student.group({
    padre: false,
    madre: false,
    hermanos: false,
    abuelos: false,
    tios: false,
  });

constructor( private readonly student: FormBuilder) {
}

  getErrorMessage() {
    //MENSAJE ERROR CON QUIEN VIVES
    if (this.homeStudent.hasError('required')) {
      return 'Campo requerido';
    }
    return this.homeStudent.hasError('homeStudent') ? 'Espacio Vacio' : '';
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
    //MENSAJE ERROR CANTON
    if (this.studentCity.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.studentCity.hasError('studentAddress') ? 'Espacio Vacio' : '';
    //MENSAJE ERROR DIRECCION
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
  }

  ngOnInit(): void {
    this.studentForm = this.initForm();
  }

  onSubmit (): void{
    console.log('Hola');
  }


  initForm(): FormGroup {
    return this.student.group ({


      lastNameStudent :['', [Validators.required, Validators.maxLength(50)]],


      //ERROR DE NOMBRE
      nameStudent: ['', [Validators.required, Validators.maxLength(50)]],

      /*ERROR DE EMAIL
      email = new FormControl('', [Validators.required, Validators.email]);*/

      //ERROR FECHA

      dateStudent: ['', [Validators.required]],

//ERROR CON QUINES VIVE

      homeStudent: ['', [Validators.required]],

//ERROR CON CI

      studentCI: ['', [Validators.required]],
      studentCI2: ['', [Validators.required]],


//ERROR NIVEL AL QUE APLICA

      studentLevel: ['', [Validators.required]],


//ERROR INSTITUCION ANTERIOR

      studentInstitution: ['', [Validators.required]],




      //ERROR DIRECCION ESTUDIANTE
      studentCity:    ['', [Validators.required]],
      studentAddress: ['', [Validators.required]],

//ERROR  CELULAR1 ESTUDIANTE
      studentPhone1: ['', [Validators.required]],
      studentPhone2: ['', [Validators.required]],

//ERROR SUBIR CEDULA PDF

      studentCIPDF: ['', [Validators.required]],
      studentPDF: ['', [Validators.required]],

    })
  }



  msgValidateCedula() {
    return this.studentForm.get('studentCI2')?.hasError('required') ? 'Campo requerido' :
      this.studentForm.get('studentCI2')?.hasError('minlength') ? 'La identificación debe tener como minimo 10 digitos' :
        this.studentForm.get('studentCI2')?.hasError('repeatOdonto') ? 'La cédula ya se encuentra registrada' :
          '';
  }

  msgValidateTexto() {
    return this.studentForm.get('studentCity')?.hasError('required') ? 'Campo requerido' :
      this.studentForm.get('studentCity')?.hasError('minlength') ? 'No exceder los 150 caracteres' :

          this.studentForm.get('studentAddress')?.hasError('required') ? 'Campo requerido' :
            this.studentForm.get('studentAddress')?.hasError('minlength') ? 'No exceder los 150 caracteres' :
          '';
  }

  msgValidateCelular() {
    return this.studentForm.get('studentPhone1')?.hasError('required') ? 'Campo requerido' :
      this.studentForm.get('studentPhone1')?.hasError('minlength') ? 'El numero debe tener como minimo 10 digitos' :

        this.studentForm.get('studentPhone2')?.hasError('required') ? 'Campo requerido' :
          this.studentForm.get('studentPhone2')?.hasError('minlength') ? 'El numero debe tener como minimo 10 digitos' :

          '';
  }


  check(event: KeyboardEvent) {
    var preg = /^([0-9]+\.?[0-9]{0,2})$/;
    if ((preg.test(event.key) !== true) && event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      event.preventDefault();
    }
  }





}























