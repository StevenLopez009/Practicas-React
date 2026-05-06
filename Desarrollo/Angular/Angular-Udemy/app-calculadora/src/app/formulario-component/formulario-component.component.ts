import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-component',
  imports: [FormsModule],
  templateUrl: './formulario-component.component.html',
  styleUrl: './formulario-component.component.css'
})
export class FormularioComponentComponent {
  numero1: number = 0;
  numero2: number = 0;

  @Output() resultado = new EventEmitter<number>();

  sumar() {
    const suma = (this.numero1) + (this.numero2);
    this.resultado.emit(suma);
  }
}
