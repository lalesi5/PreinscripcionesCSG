import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//MODULOS
import { AppRoutingModule } from "src/app/app-routing.module";

//COMPONENTES
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