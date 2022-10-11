import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


//COMPONENTES

import { EstudianteComponent } from "./Estudiante/estudiante.component";
import { MadreComponent } from "./Madre/madre/madre.component";
import { PadreComponent } from "./Padre/padre/padre.component";


const routes: Routes = [

  {
    path: '',
    children:[
        {path: 'estudiante', component: EstudianteComponent},
        {path: 'madre', component: MadreComponent},
        {path: 'padre', component: PadreComponent},

        {path: '***', redirectTo: 'sistema'},

        ]   
  }
]


@NgModule({
    imports: [ RouterModule.forChild(routes)

    ]
})
export class SistemaRoutingModule{}