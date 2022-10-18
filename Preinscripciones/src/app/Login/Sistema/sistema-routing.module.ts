import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//COMPONENTES
import { EstudianteComponent } from "./Estudiante/estudiante.component";
import { RepresentanteComponent} from "./Representante/representante.component";
import {SistemaComponent} from "./sistema.component";

const routes: Routes = [
{
  path: '',

  children:[
    { path:'', component: SistemaComponent},
    { path:'estudiante', component: EstudianteComponent},
    { path:'representante', component: RepresentanteComponent},
    { path:'**', redirectTo:'acceso' },

  ]
}
];


@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})
export class SistemaRoutingModule{}
