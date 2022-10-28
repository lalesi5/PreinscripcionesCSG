import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.css']
})
export class FinalizarComponent {
  constructor(private router: Router) { }
  onSubmit (): void{
    console.log('Funciona este boton')
    this.router.navigate(['login']);
  }
}
