import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DetalleFact } from 'src/app/modelo/DetalleFact';
import { DetalleFactura2 } from 'src/app/modelo/detalleFactura';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {
  private guardar:string="http://localhost:8080/api/savD";
  private listar:string="http://localhost:8080/api/listD";
  private borrar: string = 'http://localhost:8080/api/delD';
  private buscar: string = "http://localhost:8080/api/buscD";
  private edit: string = "http://localhost:8080/api/modiD";

detalleObj: DetalleFactura2[] = [];

  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }




  //Metodo para guardar
  create(detalleObj: DetalleFactura2):Observable<DetalleFactura2>{
    return this.http.post<DetalleFactura2>(this.guardar, detalleObj,{headers:this.httpHeaders})
  }

  //Metodo para listar
  getDetalle(): Observable<DetalleFact[]> {
    return this.http
      .get(this.listar)
      .pipe(map((response) => response as DetalleFact[]));
  }
  
    //Metodo para buscar
    getDetalleId(id:number):Observable<DetalleFact>{
      return this.http.get<DetalleFact>(this.buscar+"/"+id);
  }

  

      //Metodo para modificar
      updateDetalle(detalleObj:DetalleFact){
        return this.http.put<DetalleFact>(this.edit+"/"+detalleObj.id_detalle,detalleObj);
    }
  //Metodo para eliminar
  eliminarDetalle(id: any): Observable<DetalleFact> {
    return this.http.delete<DetalleFact>(this.borrar + '/' + id);
  }
}
