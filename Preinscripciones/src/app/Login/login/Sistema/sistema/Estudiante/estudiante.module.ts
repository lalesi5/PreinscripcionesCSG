import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { EstudianteRoutingModule } from "./estudiante-routing.module";

//COMPONENTES
import { SistemaComponent } from "../sistema.component";


@NgModule({
    declarations: [
        SistemaComponent
    ],
    imports: [CommonModule,
    EstudianteRoutingModule]

}) 
  export class EstudianteModule{}