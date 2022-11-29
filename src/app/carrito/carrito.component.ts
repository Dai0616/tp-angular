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
  constructor(private carrito: MilanesaCarritoService) {
    this.listaDeCompras$ = carrito.listaDeCompras.asObservable();
  }
  ngOnInit(): void {
  }
}
