import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Milanesa } from './milanesas-list/milanesas';

@Injectable({
  providedIn: 'root'
})

export class MilanesaCarritoService {

  private _listaDeCompras: Milanesa[] = [];
  listaDeCompras: BehaviorSubject<Milanesa[]> = new BehaviorSubject(this._listaDeCompras);
  public milanesas: Observable<Milanesa[]> = this.listaDeCompras.asObservable();

  constructor() { }

  agregarAlCarrito(milanesa: Milanesa) {
    let item: Milanesa = this._listaDeCompras.find((v1) => v1.variedad == milanesa.variedad)!;
    if (!item){
    this._listaDeCompras.push ({ ... milanesa});
    } else {
      item.cantidad += milanesa.cantidad;
    }
    this.listaDeCompras.next (this._listaDeCompras);
  }

}
