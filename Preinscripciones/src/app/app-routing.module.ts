import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccesoComponent} from "./Acceso/acceso.component";
import {LoginComponent} from "./Login/login.component";



const routes: Routes = [

  {path: '', redirectTo: 'acceso', pathMatch: 'full'},

  {path: 'acceso', component: AccesoComponent},
  {path: 'login', component: LoginComponent},

  {path: 'sistema', loadChildren: () => import('../app/Login/Sistema/sistema.module').then(m => m.SistemaModule)},

  {path: '**', redirectTo: 'sistema'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
