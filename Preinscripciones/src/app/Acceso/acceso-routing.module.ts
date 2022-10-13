import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//COMPONENTES
import { LoginComponent } from "src/app/Login/login.component";

const routes: Routes = [
    {
        path: '',
        children:[
            {path: 'login', component: LoginComponent},
            {path: '***', redirectTo: 'acceso'},

        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)

    ]
})
export class AccesoRoutingModule{}