import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allowedChars1 = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));
  allowedChars2 = new Set('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => c.charCodeAt(0)));

  dataForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.dataForm = this.initForm();
  }

  onSubmit (): void{
    console.log('Form ->',this.dataForm.value);
    this.router.navigate(['sistema']);
  }
  initForm (): FormGroup{
    return this.fb.group({
      clave: ['', [Validators.required]],
      cedula: ['', [Validators.required]]  })
  }

  msgValidateCedula() {
    return this.dataForm.get('cedula')?.hasError('required') ? 'Campo obligatorio' :
      this.dataForm.get('cedula')?.hasError('minlength') ? 'El usuario debe tener como mín 10 digitos' :
        this.dataForm.get('cedula')?.hasError('repeatOdonto') ? 'La cédula ya se encuentra registrada' :
          '';
  }
  msgValidateClave() {
    return this.dataForm.get('clave')?.hasError('required') ? 'Campo obligatorio' :
      this.dataForm.get('clave')?.hasError('minlength') ? 'La clave debe tener como máx 8 digitos' :
          '';
  }

  check1(event: KeyboardEvent) {
    var preg = /^([0-9]+\.?[0-9]{0,2})$/;
    if ((preg.test(event.key) !== true) && event.keyCode > 31 && !this.allowedChars1.has(event.keyCode)) {
      event.preventDefault();
    }
  }

  check2(event: KeyboardEvent) {
    var preg = /^([0-9]+\.?[0-9]{0,2})$/;
    if ((preg.test(event.key) !== true) && event.keyCode > 31 && !this.allowedChars2.has(event.keyCode)) {
      event.preventDefault();
    }
  }
}

  
