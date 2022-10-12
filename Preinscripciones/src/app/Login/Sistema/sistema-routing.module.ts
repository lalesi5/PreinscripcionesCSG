import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//COMPONENTES
import { EstudianteComponent } from "./Estudiante/estudiante.component";
import { MadreComponent } from "./Madre/madre.component";
import { PadreComponent } from "./Padre/padre.component";

const routes: Routes = [
{
  path: '',
  children:[
    { path:'estudiante', component: EstudianteComponent},
    { path:'padre', component: PadreComponent},
    { path:'madre', component: MadreComponent},
    { path:'**', redirectTo:'estudiante' },
  ]
}
];


@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})
export class SistemaRoutingModule{}