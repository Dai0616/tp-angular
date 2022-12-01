import { Component, OnInit } from '@angular/core';
import { MilanesaCarritoService } from '../milanesa-carrito.service';
import { MilanesaDataService } from '../milanesa-data.service';
import { Milanesa } from './milanesas';

@Component({
  selector: 'app-milanesas-list',
  templateUrl: './milanesas-list.component.html',
  styleUrls: ['./milanesas-list.component.scss']
})
export class MilanesasListComponent implements OnInit {


  milanesas : Milanesa[] =[];


  constructor(
    private carrito: MilanesaCarritoService,
    private milanesasDataService: MilanesaDataService) {
  }

  ngOnInit(): void {
    this.milanesasDataService.getAll()
    .subscribe(milanesas => this.milanesas = milanesas);
  }

  agregarAlCarrito (milanesa: any): void {
    if (milanesa.cantidad !=0){
    this.carrito.agregarAlCarrito (milanesa);
    milanesa.stock -= milanesa.cantidad;
    milanesa.cantidad = 0;
  }
}
  valorMaximo(m: string) {
    alert (m);
  }
}
