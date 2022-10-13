import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { SistemaRoutingModule } from "./sistema-routing.module";

//COMPONENTES
import { EstudianteComponent } from "./Estudiante/estudiante.component";
import { PadreComponent } from "./Padre/padre.component";
import { MadreComponent } from "./Madre/madre.component";


@NgModule({
  declarations: [
    EstudianteComponent,
    PadreComponent,
    MadreComponent
  ],

    imports: [
      CommonModule,
      SistemaRoutingModule
]
})
  export class SistemaModule{}
