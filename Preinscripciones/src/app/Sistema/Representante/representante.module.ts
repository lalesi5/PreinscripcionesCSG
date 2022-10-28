import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//MODULOS
import {RepresentanteRoutingModule} from "./representante-routing.module";


//COMPONENTES


@NgModule({
  imports: [CommonModule,
    RepresentanteRoutingModule
  ],
  declarations: [
  ],
  exports:[
    CommonModule
]

})
export class RepresentanteModule{}
