import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { LoginRoutingModule } from "./login-routing.module";

//COMPONENTES
import { SistemaComponent } from "./Sistema/sistema.component";


@NgModule({
    declarations: [
        SistemaComponent
    ],
    imports: [CommonModule,
    LoginRoutingModule]

})
export class LoginModule{}
