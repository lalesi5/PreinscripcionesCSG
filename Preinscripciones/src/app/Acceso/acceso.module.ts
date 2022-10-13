import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

//MODULOS
import {AccesoRoutingModule} from "./acceso-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatCommonModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";

//COMPONENTES
import {AccesoComponent} from "./acceso.component";





@NgModule({
  declarations: [
    AccesoComponent
  ],
  imports: [
    CommonModule,
    AccesoRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatCommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    MatCardModule
  ]

})
export class AccesoModule {
}
