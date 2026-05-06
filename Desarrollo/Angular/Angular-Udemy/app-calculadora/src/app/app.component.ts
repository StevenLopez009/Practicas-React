import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponentComponent } from "./formulario-component/formulario-component.component";
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-root',
  imports: [FormularioComponentComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  resultadoRecibido: number = 0;

  mostrarResultado(resultadoHijo: number) {
    this.resultadoRecibido = resultadoHijo;
  }
}
