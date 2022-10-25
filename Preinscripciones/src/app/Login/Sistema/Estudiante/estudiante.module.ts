import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { EstudianteRoutingModule } from "./estudiante-routing.module";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCommonModule, MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';



//COMPONENTES
import { SistemaComponent } from "../sistema.component";
import {SistemaModule} from "../sistema.module";
import {MatTabsModule} from "@angular/material/tabs";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";



@NgModule({
    declarations: [
        SistemaComponent
    ],
  imports: [CommonModule,
    EstudianteRoutingModule,
    SistemaModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule, MatTabsModule,
    RouterLinkActive,
    RouterLink,
    MatRadioModule,

    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatCommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, MatStepperModule
  ],
  providers: [],
  bootstrap: [SistemaComponent]

})
  export class EstudianteModule{}
