import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { LoginRoutingModule } from "./login-routing.module";
import {SistemaComponent} from "./Sistema/sistema.component";
import {RouterOutlet} from "@angular/router";


//COMPONENTES


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterOutlet,
  ],
  declarations: [
      SistemaComponent
    ],
  exports: [ CommonModule]
})
export class LoginModule{}
