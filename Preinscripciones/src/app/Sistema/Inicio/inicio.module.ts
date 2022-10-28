import { NgModule } from "@angular/core";
import { InicioRoutingModule } from './inicio-routing.module'
import {InicioComponent} from "./inicio.component";

@NgModule({

    declarations: [InicioComponent],
    imports: [InicioRoutingModule],

    exports: [
        InicioComponent
    ]
})
export class  InicioModule{}
