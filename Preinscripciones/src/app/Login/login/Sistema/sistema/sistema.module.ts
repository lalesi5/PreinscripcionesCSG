import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { SistemaRoutingModule } from "./sistema-routing.module";

//COMPONENTES
import { EstudianteComponent } from "./Estudiante/estudiante.component";
import { MadreComponent } from "./Madre/madre/madre.component";
import { PadreComponent } from "./Padre/padre/padre.component";



@NgModule({
  declarations: [
    EstudianteComponent,
    MadreComponent,
    PadreComponent
],
    imports: [CommonModule,
    SistemaRoutingModule,
    EstudianteComponent,
    MadreComponent,
    PadreComponent,

]
 
}) 
  export class SistemaModule{}