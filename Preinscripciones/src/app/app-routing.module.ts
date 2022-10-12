import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [

  {
    path: 'acceso',
    loadChildren: () => import ('src/app/Acceso/acceso.module').then(m => m.AccesoModule)
  },
  {
    path: 'sistema',
    loadChildren: () => import ('../app/Login/Sistema/sistema.module').then(m => m.SistemaModule)
  },

  {
    path: '**',
    redirectTo: 'acceso'
  }

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
