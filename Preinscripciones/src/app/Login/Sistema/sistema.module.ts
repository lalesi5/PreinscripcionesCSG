import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { SistemaRoutingModule } from "./sistema-routing.module";

//COMPONENTES
import { EstudianteComponent } from "./Estudiante/estudiante.component";
import {RepresentanteComponent} from "./Representante/representante.component";


@NgModule({
  declarations: [
    EstudianteComponent,
    RepresentanteComponent
  ],

    imports: [
      CommonModule,
      SistemaRoutingModule
]
})
  export class SistemaModule{}
