import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {


  dataForm!:FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
     
    });
  }

}
