import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Milanesa } from './milanesas-list/milanesas';

const URL = 'https://63867184beaa6458267cb1f3.mockapi.io/api/milanesas';

@Injectable({
  providedIn: 'root'
})
export class MilanesaDataService {

  constructor( private http: HttpClient) { }

  public getAll(): Observable<Milanesa[]> {

    return this.http.get<Milanesa[]>(URL)
      .pipe(
        tap ( (milanesas: Milanesa[]) => milanesas.forEach(milanesa=> milanesa.cantidad = 0))
      );
  }

}
