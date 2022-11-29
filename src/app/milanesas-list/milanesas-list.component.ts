import { Component, OnInit } from '@angular/core';
import { MilanesaCarritoService } from '../milanesa-carrito.service';
import { Milanesa } from './milanesas';

@Component({
  selector: 'app-milanesas-list',
  templateUrl: './milanesas-list.component.html',
  styleUrls: ['./milanesas-list.component.scss']
})
export class MilanesasListComponent implements OnInit {


  milanesas : Milanesa[] =[
    {
      variedad: 'Capresse',
      precio: 110,
      stock:  4,
      imagen: 'assets/img/capresse.jpg',
      oferta: false,
      cantidad: 0,
    },
    {
      variedad: 'Cebolla Caramelizada',
      precio: 120,
      stock:  40,
      imagen: 'assets/img/cebollacaramelizada.jpg',
      oferta: true,
      cantidad: 0,
    },
    {
      variedad: 'Choclo y Queso',
      precio: 110,
      stock:  68,
      imagen: 'assets/img/chocloyqueso.jpg',
      oferta: false,
      cantidad: 0,
    },
    {
      variedad: 'Jamon y Queso',
      precio: 86,
      stock:  50,
      imagen: 'assets/img/jamonyqueso.jpg',
      oferta: false,
      cantidad: 0,
    },
    {
      variedad: 'Verdeo y Queso',
      precio: 110,
      stock:  0,
      imagen: 'assets/img/verdeoyqueso.jpg',
      oferta: false,
      cantidad: 0,
    },
    {
      variedad: 'Zapallo y Queso',
      precio: 112,
      stock:  42,
      imagen: 'assets/img/zapalloyqueso.jpg',
      oferta: false,
      cantidad: 0,
    }
  ];

  constructor(private carrito: MilanesaCarritoService) {
  }

  ngOnInit(): void {

  }

  agregarAlCarrito (milanesa: any): void {
    this.carrito.agregarAlCarrito (milanesa);
    milanesa.stock -= milanesa.cantidad;
    milanesa.cantidad = 0;
  }

  valorMaximo(m: string) {
    alert (m);
  }
}
