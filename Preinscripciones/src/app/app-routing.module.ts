import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccesoComponent} from './Acceso/acceso/acceso.component'

const routes: Routes = [
  {path:'acceso', component: AccesoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
