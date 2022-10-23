import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent  {


@Input() resultadoSuma!: number;
@Input() resultadoResta!:number;
@Input() resultadoMultiplica!:number;
@Input() resultadoDivide!:number;

}
