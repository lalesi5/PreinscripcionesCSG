import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { EstudianteRoutingModule } from "./estudiante-routing.module";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';



//COMPONENTES
import { SistemaComponent } from "../sistema.component";
import {SistemaModule} from "../sistema.module";
import {MatTabsModule} from "@angular/material/tabs";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatRadioModule} from "@angular/material/radio";

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
      MatRadioModule
    ],
  providers: [],
  bootstrap: [SistemaComponent]

})
  export class EstudianteModule{}
