import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import { LoginRoutingModule } from "./login-routing.module";
<<<<<<< HEAD
//MODULOS
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatCommonModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
=======
import {SistemaComponent} from "./Sistema/sistema.component";
import {RouterOutlet} from "@angular/router";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {SistemaModule} from "./Sistema/sistema.module";


>>>>>>> c3605d546d9f03290f097b32cdfb6429e5606e62
//COMPONENTES


@NgModule({
<<<<<<< HEAD
    declarations: [
        SistemaComponent
        
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

=======
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterOutlet,
    MatStepperModule,
    MatIconModule,
    SistemaModule,
  ],
  declarations: [
      SistemaComponent
    ],
  exports: [ CommonModule]
>>>>>>> c3605d546d9f03290f097b32cdfb6429e5606e62
})
export class LoginModule{}
