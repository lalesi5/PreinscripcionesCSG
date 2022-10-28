import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    children:[

      {path: '***', redirectTo: 'sistema'},

    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)

  ]
})
export class RepresentanteRoutingModule{}
