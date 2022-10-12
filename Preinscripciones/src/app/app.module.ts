import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesoComponent } from './Acceso/acceso/acceso.component';
import { LoginComponent } from './Login/login/login.component';
import { AccesoService } from './Servicios/acceso.service';
import { GeneralComponent } from './Core/General/general/general.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

//MODULOS
import { AppRoutingModule } from "src/app/app-routing.module";

//COMPONENTES
import { AppComponent } from "src/app/app.component";
;

@NgModule({

  declarations: [
    AppComponent,
    AccesoComponent,
    LoginComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [RouterModule],
  providers: [
    AccesoService
  ],
  bootstrap: [AppComponent]

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