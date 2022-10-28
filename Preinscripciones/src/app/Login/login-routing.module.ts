import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./login.component";


//COMPONENTES


const routes: Routes = [

  // {path: '', component:LoginComponent},
  // {path: 'sistema',
  //   loadChildren: () => import('./Sistema/sistema.module').then(m => m.SistemaModule)},
  // {path: '**', redirectTo: 'login', pathMatch: 'full'}
]
@NgModule({
    imports:
      [ RouterModule.forChild(routes)]
})
export class LoginRoutingModule{}
