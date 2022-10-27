import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccesoComponent} from "./Acceso/acceso.component";
import {LoginComponent} from "./Login/login.component";




const routes: Routes = [

  {path: '', redirectTo: 'acceso', pathMatch: 'full'},

  {path: 'acceso', component: AccesoComponent},
  //{path: 'login', component: LoginComponent},
   {
     path: 'login',
    loadChildren: () => import('./Login/login.module').then(m => m.LoginModule)},
  {path: '**', redirectTo: 'acceso', pathMatch: 'full'}

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]

})
export class AppRoutingModule { }
