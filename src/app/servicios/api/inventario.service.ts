import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Inventario } from 'src/app/modelo/Inventario';
import { Inventario2 } from 'src/app/modelo/inventario2';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private guardar:string="http://localhost:8080/api/savInvent";
  private listar:string="http://localhost:8080/api/lisInvent";
  private actualizar: string = 'http://localhost:8080/api/modiU';
  private borrar: string = 'http://localhost:8080/api/delInvent';
  private edit: string = "http://localhost:8080/api/modiInvent";
  private buscar: string = "http://localhost:8080/api/buscInvent";

inventarioObj: Inventario2[] = [];

  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  //Metodo para guardar
  createInventario(inventarioObj: Inventario2):Observable<Inventario2>{
    return this.http.post<Inventario2>(this.guardar, inventarioObj,{headers:this.httpHeaders})
  }

  //Metodo para listar
  getInventario(): Observable<Inventario2[]> {
    return this.http
      .get(this.listar)
      .pipe(map((response) => response as Inventario2[]));
  }
  


    //Metodo para editar por id
  actualizarInventario(inventario: Inventario): Observable<Inventario> {
    return this.http.put<Inventario>(
      this.actualizar + '/' + inventario.id_inventario,
   inventario
    );
  }

      //Metodo para buscar
      getInventarioId(id:number):Observable<Inventario>{
        return this.http.get<Inventario>(this.buscar+"/"+id);
    }

  //Metodo para eliminar
  eliminarInventario(id: any): Observable<Inventario> {
    return this.http.delete<Inventario>(this.borrar + '/' + id);
  }

    //Metodo para modificar
    updateInventario(inventarioObj:Inventario){
      return this.http.put<Inventario>(this.edit+"/"+inventarioObj.id_inventario,inventarioObj);
  }


}
