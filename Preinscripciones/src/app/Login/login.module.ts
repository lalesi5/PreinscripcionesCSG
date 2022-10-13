import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { LoginRoutingModule } from "./login-routing.module";
//MODULOS
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatCommonModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
//COMPONENTES
import { SistemaComponent } from "./Sistema/sistema.component";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [
        SistemaComponent,
        LoginComponent
    ],
    imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatCommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule

    ],
    exports: [
        MatCardModule
    ]

}) 
export class LoginModule{}