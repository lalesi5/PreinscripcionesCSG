import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [

  {path: '', redirectTo: 'acceso', pathMatch: 'full'},

  {
    path: 'acceso',
    loadChildren: () => import('../app/Acceso/acceso.module').then(m => m.AccesoModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/Login/login.module').then(m => m.LoginModule)
  },

  {
    path: '**',
    redirectTo: 'acceso'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
