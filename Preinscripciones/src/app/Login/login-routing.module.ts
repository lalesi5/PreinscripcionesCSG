import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//COMPONENTES
import { SistemaComponent } from "./Sistema/sistema.component";

const routes: Routes = [
];


@NgModule({
    imports: [ RouterModule.forChild(routes)

    ]
})
export class LoginRoutingModule{}
