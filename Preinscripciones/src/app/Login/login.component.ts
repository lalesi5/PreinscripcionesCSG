import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
}

  
