import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import {RepresentanteRoutingModule} from "./representante-routing.module";


//COMPONENTES
import {SistemaComponent} from "../sistema.component";


@NgModule({
  declarations: [
    SistemaComponent
  ],
  imports: [CommonModule,
  RepresentanteRoutingModule
  ]

})
export class RepresentanteModule{}
