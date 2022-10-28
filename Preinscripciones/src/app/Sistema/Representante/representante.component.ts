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
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;

  allowedChars = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));

  representanteForm!: FormGroup;


  //ERROR DE APELLIDOS
  lastNameParent = new FormControl('', [Validators.required]);
  //ERROR DE NOMBRES
  //name = new FormControl({
  nameParent = new FormControl('', Validators.required)
  //ERROR DE EMAIL
  email = new FormControl('', [Validators.required, Validators.email]);
  //ERROR CEDULA
  parentCI = new FormControl('', [Validators.required]);
  parentCI2 = new FormControl('', [Validators.required]);

  //ERROR PARENTEZCO
  parentezco = new FormControl('', [Validators.required]);
  //ERROR DIRECCION REPRESENTANTE
  parentAddress = new FormControl('', [Validators.required]);
  parentCity = new FormControl('', [Validators.required]);

  //ERROR TELEFONOS DE CONTACTO
  parentsPhone1 = new FormControl('', [Validators.required]);
  parentsPhone2 = new FormControl('', [Validators.required]);


  constructor(private readonly representante: FormBuilder) {
  }


  getErrorMessage() {

    //MENSAJE ERROR APELLIDOS
    if (this.lastNameParent.hasError('required')) {
      return 'Campo requerido';
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
    if (this.parentezco.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.parentezco.hasError('familiar') ? 'Espacio Vacio' : '';


//MENSAJE ERROR DIRECCION REPRESENTANTE
    if (this.parentAddress.hasError('required')) {
      return 'No dejar campos vacios';
    }
    return this.parentAddress.hasError('addressParent') ? 'Espacio Vacio' : '';


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
    this.representanteForm = this.initForm();
  }


  onSubmit(): void {
      console.log('Form ->', this.representanteForm.value);
  }


  initForm(): FormGroup {
    return this.representante.group({

      //ERROR DE APELLIDOS
      lastNameParent: ['', [Validators.required, Validators.maxLength(50)]],


      //ERROR DE NOMBRES
      //name = new FormControl({
      nameParent: ['', [Validators.required, Validators.maxLength(50)]],


      //ERROR DE EMAIL
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],

//ERROR CEDULA

      parentCI: ['', [Validators.required]],
      parentCI2: ['', [Validators.required]],



//ERROR PARENTEZCO
      parentezco: ['', [Validators.required]],


//ERROR DIRECCION REPRESENTANTE

      parentAddress: ['', [Validators.required]],
      parentCity: ['', [Validators.required]],



//ERROR TELEFONOS DE CONTACTO
      parentPhone1: ['', [Validators.required]],
      parentPhone2: ['', [Validators.required]]

    })
  }


  msgValidateCedula() {
    return this.representanteForm.get('parentCI2')?.hasError('required') ? 'Campo requerido' :
      this.representanteForm.get('parentCI2')?.hasError('minlength') ? 'La identificación debe tener como minimo 10 digitos' :
        this.representanteForm.get('parentCI2')?.hasError('repeatOdonto') ? 'La cédula ya se encuentra registrada' :
          '';
  }


  msgValidateTexto() {
    return this.representanteForm.get('parentCity')?.hasError('required') ? 'Campo requerido' :
      this.representanteForm.get('parentCity')?.hasError('minlength') ? 'No exceder los 150 caracteres' :

        this.representanteForm.get('parentAddress')?.hasError('required') ? 'Campo requerido' :
          this.representanteForm.get('parentAddress')?.hasError('minlength') ? 'No exceder los 150 caracteres' :
            '';
  }

  msgValidateEmail() {
    return this.representanteForm.get('email')?.hasError('pattern') ? 'Correo electrónico invalido' :
      this.representanteForm.get('email')?.hasError('required') ? 'Campo Requerido' : '';
  }

  msgValidateCelular() {
    return this.representanteForm.get('parentPhone1')?.hasError('required') ? 'Campo requerido' :
      this.representanteForm.get('parentPhone1')?.hasError('minlength') ? 'El numero debe tener como minimo 10 digitos' :

        this.representanteForm.get('parentPhone2')?.hasError('required') ? 'Campo requerido' :
          this.representanteForm.get('parentPhone2')?.hasError('minlength') ? 'El numero debe tener como minimo 10 digitos' :

            '';
  }




  check(event: KeyboardEvent) {
    var preg = /^([0-9]+\.?[0-9]{0,2})$/;
    if ((preg.test(event.key) !== true) && event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      event.preventDefault();
    }


  }
}
