import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { AccesoRoutingModule } from "./acceso-routing.module";

//COMPONENTES
import { LoginComponent } from "src/app/Login/login/login.component";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [CommonModule,
    AccesoRoutingModule]
 
}) 
  export class AccesoModule{}
