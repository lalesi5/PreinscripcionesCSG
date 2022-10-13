import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//COMPONENTES
import { EstudianteComponent } from "./Estudiante/estudiante.component";
import { MadreComponent } from "./Madre/madre.component";
import { PadreComponent } from "./Padre/padre.component";
import {RepresentanteComponent} from "./Representante/representante.component";

const routes: Routes = [
{
  path: '',
  children:[
    { path:'estudiante', component: EstudianteComponent},
    { path:'representante', component: RepresentanteComponent},
    { path:'**', redirectTo:'estudiante' },
  ]
}
];


@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})
export class SistemaRoutingModule{}
