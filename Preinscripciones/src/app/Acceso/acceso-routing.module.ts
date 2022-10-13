import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

//COMPONENTES

import {AccesoComponent} from "./acceso.component";

const routesAccess: Routes = [
  {
    path: '', component: AccesoComponent, children:
      [
        { path: '', redirectTo: 'acceso',pathMatch: 'full'},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAccess)

  ]
})
export class AccesoRoutingModule {
}
