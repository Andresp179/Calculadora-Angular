import { Component } from '@angular/core';
import { setupMaster } from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Aplicacion de Calculadora';



  resultado!: number;
  resultPadreSuma!: number;
  resultPadreResta!: number;
  resultPadreMultiplica!: number;
  resultPadreDivide!: number;

  procesarResultado1(resultado: number){
    this.resultPadreSuma=resultado;
  }

  procesarResultado2(resultado: number){
    this.resultPadreResta=resultado;
  }

  procesarResultado3(resultado: number){
    this.resultPadreMultiplica=resultado;
  }

  procesarResultado4(resultado: number){
    this.resultPadreDivide=resultado;
  }

  }
