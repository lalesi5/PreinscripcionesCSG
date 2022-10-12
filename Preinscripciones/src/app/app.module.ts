import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesoComponent } from './Acceso/acceso/acceso.component';
import { LoginComponent } from './Login/login/login.component';
<<<<<<< HEAD
=======
import { AccesoService } from './Servicios/acceso.service';
import { GeneralComponent } from './Core/General/general/general.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
>>>>>>> parent of d363e6e... Merge branch 'develop-Mafer' of https://github.com/lalesi5/PreinscripcionesCSG into develop-Mafer


@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

