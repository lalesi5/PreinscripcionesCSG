import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AccesoComponent } from './Acceso/acceso/acceso.component';
import { LoginComponent } from './Login/login/login.component';

=======
import { AccesoService } from './Servicios/acceso.service';
import { GeneralComponent } from './Core/General/general/general.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
>>>>>>> develop-Mafer


@NgModule({

  declarations: [
    AppComponent,
<<<<<<< HEAD
    AccesoComponent,
    LoginComponent
=======
    GeneralComponent
>>>>>>> develop-Mafer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
=======
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AccesoRoutingModule,
>>>>>>> develop-Mafer
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
 

})
export class AppModule{}