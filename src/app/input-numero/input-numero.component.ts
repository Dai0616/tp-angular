import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Milanesa } from '../milanesas-list/milanesas';

@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.scss']
})
export class InputNumeroComponent implements OnInit {

  constructor() {}

  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number> ();

  @Output()
  valorMaximo: EventEmitter<string> = new EventEmitter<string> ();

  ngOnInit(): void {

  }
  upCantidad(): void {
    if (this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else
      this.valorMaximo.emit ("Se alcanzó el valor máximo");

}

  downCantidad(): void {
    if (this.cantidad > 0)
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
  }

  soloNumerosEnInput (e : any): void {
    if (!((e.key)<=9 && (e.key)>=0) || (e.key== " ")){
      e.preventDefault();
      }
  }

  verificoCantidad (e : any): void {
    if (this.cantidad > this.max){
      alert('El valor solicitado excede al valor disponible');
      this.cantidad= this.max;
      this.cantidadChange.emit(this.cantidad);
     }
    else if (this.cantidad<0){
      alert ('Ingrese un numero mayor a 0');
      this.cantidad=0;
    }
  }


}
