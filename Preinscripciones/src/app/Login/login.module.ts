import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {SistemaComponent} from "../Sistema/sistema.component";

//MODULOS
import { LoginRoutingModule } from "./login-routing.module";

import {RouterOutlet} from "@angular/router";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {SistemaModule} from "../Sistema/sistema.module";



//COMPONENTES


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterOutlet,
    MatStepperModule,
    MatIconModule,
    SistemaModule
  ],
  declarations: [
      SistemaComponent
    ],
  exports: [ CommonModule]
})
export class LoginModule{}
