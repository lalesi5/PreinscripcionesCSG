import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { EstudianteRoutingModule } from "./estudiante-routing.module";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';



//COMPONENTES
import { SistemaComponent } from "../sistema.component";
import {SistemaModule} from "../sistema.module";

@NgModule({
    declarations: [
        SistemaComponent
    ],
    imports: [CommonModule,
    EstudianteRoutingModule,
      SistemaModule,
      BrowserAnimationsModule,
      BrowserModule,
      FormsModule,
      HttpClientModule,
      MatNativeDateModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [SistemaComponent],

})
  export class EstudianteModule{}
