import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//COMPONENTES
import {EstudianteComponent} from "./Estudiante/estudiante.component";
import {RepresentanteComponent} from "./Representante/representante.component";
import {SistemaComponent} from "./sistema.component";
import {FinalizarComponent} from "./Finalizar/finalizar.component";
import {InicioComponent} from "./Inicio/inicio.component";

const routes: Routes = [

  {path: '', component: SistemaComponent, children:
    [
        {path: '', redirectTo: 'inicio', pathMatch: "full" },

        {path: 'estudiante', component: EstudianteComponent},
        {path: 'representante', component: RepresentanteComponent},
        {path: 'finalizar', component: FinalizarComponent},
        {path: 'inicio', component: InicioComponent}
]}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule {
}
