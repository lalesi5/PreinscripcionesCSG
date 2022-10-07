import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//RUTAS PRINCIPALES
import { AppRoutingModule } from "src/app/app-routing.module";

import { AppComponent } from "src/app/app.component";
;

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{}

