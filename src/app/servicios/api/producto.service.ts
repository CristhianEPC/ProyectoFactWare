import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, Subject} from 'rxjs'

import { Producto } from 'src/app/modelo/Producto';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private httpHeaders = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })


  url:string = 'http://localhost:8080/api/productos/lisPr';
  url2:string = 'http://localhost:8080/api/productos//guPr';

  constructor(private http: HttpClient) { }

  getProducto(){
    return this.http.get<Producto[]>(this.url);
  }

  createProducto(producto:Producto){
  return this.http.post<Producto>(this.url2, producto);
  }
  }

  



