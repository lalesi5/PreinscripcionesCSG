import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

  {
    path: 'acceso',
    loadChildren: () => import ('src/app/Acceso/acceso/acceso.module').then(m => m.AccesoModule)
  },


];


@NgModule({
        imports: [
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
  }) 
  export class AppRoutingModule{

  }
