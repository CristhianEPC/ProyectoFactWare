import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Inventario } from 'src/app/modelo/Inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private guardar:string="http://localhost:8080/api/savInvent";
  private listar:string="http://localhost:8080/api/lisInvent";
  private actualizar: string = 'http://localhost:8080/api/modiU';
  private borrar: string = 'http://localhost:8080/api/delInvent';

inventarioObj: Inventario[] = [];

  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  //Metodo para guardar
  createInventario(inventarioObj: Inventario):Observable<Inventario>{
    return this.http.post<Inventario>(this.guardar, inventarioObj,{headers:this.httpHeaders})
  }

  //Metodo para listar
  getInventario(): Observable<Inventario[]> {
    return this.http
      .get(this.listar)
      .pipe(map((response) => response as Inventario[]));
  }
  


    //Metodo para editar por id
  actualizarInventario(inventario: Inventario): Observable<Inventario> {
    return this.http.put<Inventario>(
      this.actualizar + '/' + inventario.id_inventario,
   inventario
    );
  }

  
  //Metodo para eliminar
  eliminarInventario(id: any): Observable<Inventario> {
    return this.http.delete<Inventario>(this.borrar + '/' + id);
  }



}
