import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./login.component";
import {SistemaComponent} from "./Sistema/sistema.component";


//COMPONENTES


const routes: Routes = [

  {path: '', component:LoginComponent},
  {path: 'sistema',
    loadChildren: () => import('./Sistema/sistema.module').then(m => m.SistemaModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
]
@NgModule({
<<<<<<< HEAD
    imports: [ RouterModule.forChild(routes)
    ]
=======
    imports:
      [ RouterModule.forChild(routes)]
>>>>>>> c3605d546d9f03290f097b32cdfb6429e5606e62
})
export class LoginRoutingModule{}
