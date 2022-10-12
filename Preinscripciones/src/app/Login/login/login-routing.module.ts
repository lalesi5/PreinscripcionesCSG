import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//COMPONENTES
import { SistemaComponent } from "./Sistema/sistema/sistema.component";

const routes: Routes = [
  {
      path: '',
      children:[
          {path: 'sistema', component: SistemaComponent},
          {path: '***', redirectTo: 'login'},

      ]
    }
];


@NgModule({
    imports: [ RouterModule.forChild(routes)

    ]
})
export class LoginRoutingModule{}