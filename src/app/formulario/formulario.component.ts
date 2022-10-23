import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {


  Opa!: number;
  Opb!: number;


  @Output() resultSuma = new EventEmitter<number>();
  @Output() resultResta = new EventEmitter<number>();
  @Output() resultMultiplicacion = new EventEmitter<number>();
  @Output() resultDividir = new EventEmitter<number>();

  restar(): void {
    let result2 = this.Opa - this.Opb;
    this.resultResta.emit(result2);
  }
  sumar(): void {
     let result = this.Opa + this.Opb;
     this.resultSuma.emit(result);
  }

  multiplicar(): void {
    let result3 = this.Opa * this.Opb;
    this.resultMultiplicacion.emit(result3);
  }

  dividir(): void {
    let result4 = this.Opa / this.Opb;
    this.resultDividir.emit(result4);
  }




}
