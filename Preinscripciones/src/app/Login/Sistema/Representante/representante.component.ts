import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.css']
})
export class RepresentanteComponent implements OnInit {

  representanteForm!: FormGroup;


  //ERROR DE APELLIDOS
  lastNameParent = new FormControl('', [Validators.required]);


  //ERROR DE NOMBRES
  //name = new FormControl({
  nameParent = new FormControl('', Validators.required)


  //ERROR DE EMAIL
  email = new FormControl('', [Validators.required]);

//ERROR CEDULA

  parentCI = new FormControl('', [Validators.required]);


//ERROR PARENTEZCO
  familiar = new FormControl('', [Validators.required]);



//ERROR DIRECCION REPRESENTANTE

  addressParent = new FormControl('', [Validators.required]);


//ERROR TELEFONOS DE CONTACTO
  parentsPhone1 = new FormControl('', [Validators.required]);
  parentsPhone2 = new FormControl('', [Validators.required]);



  constructor( private readonly representante: FormBuilder) {
  }


  getErrorMessage() {

    //MENSAJE ERROR APELLIDOS
    if (this.lastNameParent.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.lastNameParent.hasError('lastNameParent') ? 'Espacio Vacio' : '';


//MENSAJE ERROR NOMRBES
    if (this.nameParent.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.nameParent.hasError('nameParent') ? 'Espacio Vacio' : '';


    //MENSAJE ERROR CEDULA REPRESENTANTE
    if (this.parentCI.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.parentCI.hasError('parentCI') ? 'Espacio Vacio' : '';



//MENSAJE ERROR PARENTEZCO
    if (this.familiar.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.familiar.hasError('familiar') ? 'Espacio Vacio' : '';



//MENSAJE ERROR DIRECCION REPRESENTANTE
    if (this.addressParent.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.addressParent.hasError('addressParent') ? 'Espacio Vacio' : '';


    if (this.email.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';


    //MENSAJE ERROR CELULAR1
    if (this.parentsPhone1.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.parentsPhone1.hasError('parentsPhone1') ? 'Espacio Vacio' : '';

    //MENSAJE ERROR CELULAR2
    if (this.parentsPhone2.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.parentsPhone2.hasError('parentsPhone2') ? 'Espacio Vacio' : '';


  }



  ngOnInit(): void {
  }

  initForm(): FormGroup {
    return this.representante.group({




      //ERROR DE APELLIDOS
      lastNameParent :['', [Validators.required]],


      //ERROR DE NOMBRES
      //name = new FormControl({
      nameParent :['', [Validators.required]],


      //ERROR DE EMAIL
      email :['', [Validators.required]],

//ERROR CEDULA

      parentCI :['', [Validators.required]],


//ERROR PARENTEZCO
      familiar :['', [Validators.required]],



//ERROR DIRECCION REPRESENTANTE

      addressParent :['', [Validators.required]],


//ERROR TELEFONOS DE CONTACTO
      parentsPhone1 :['', [Validators.required]],
      parentsPhone2 :['', [Validators.required]]

    })
  }
}
