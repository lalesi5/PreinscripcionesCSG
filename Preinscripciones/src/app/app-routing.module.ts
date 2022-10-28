import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccesoComponent} from "./Acceso/acceso.component";
import {LoginComponent} from "./Login/login.component";




const routes: Routes = [

  {path: '', redirectTo: 'acceso', pathMatch: 'full'},

  {path: 'acceso', component: AccesoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sistema', loadChildren: () => import('./Sistema/sistema.module').then(m => m.SistemaModule)},
  {path: '**', redirectTo: 'acceso', pathMatch: 'full'}
];


@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
=======
  imports: [
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]

>>>>>>> c3605d546d9f03290f097b32cdfb6429e5606e62
})
export class AppRoutingModule { }
