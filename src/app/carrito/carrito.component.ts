import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MilanesaCarritoService } from '../milanesa-carrito.service';
import { Milanesa } from '../milanesas-list/milanesas';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listaDeCompras$: Observable<Milanesa[]>;
  milanesas: Milanesa [] = [];

  constructor(private carrito: MilanesaCarritoService) {
    this.listaDeCompras$ = carrito.listaDeCompras.asObservable();
  }
  ngOnInit(): void {
    this.carrito.listaDeCompras.subscribe (milanesas => this.milanesas = milanesas);
  }

  total(){
    let suma= 0;
    this.milanesas.forEach (milanesa => {
      suma += milanesa.precio * milanesa.cantidad;
    });
    return suma;
  }

  vaciarCarrito(): void {
    this.total();
    this.carrito.limpiarCarrito();
  }
}
