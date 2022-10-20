import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
  allowedChars = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));

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
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      cedula: ['', [Validators.required]]
    })
  }


  msgValidateCedula() {
    return this.dataForm.get('cedula')?.hasError('required') ? 'Campo obligatorio' :
      this.dataForm.get('cedula')?.hasError('minlength') ? 'La identificación debe tener como minimo 10 digitos' :
        this.dataForm.get('cedula')?.hasError('repeatOdonto') ? 'La cédula ya se encuentra registrada' :
          '';
  }


  msgValidateEmail() {
    return this.dataForm.get('email')?.hasError('pattern') ? 'Correo electrónico invalido' :
      this.dataForm.get('email')?.hasError('required') ? 'Campo Requerido' : '';
  }


  check(event: KeyboardEvent) {
    var preg = /^([0-9]+\.?[0-9]{0,2})$/;
    if ((preg.test(event.key) !== true) && event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      event.preventDefault();
    }
  }


}
