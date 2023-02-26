import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Factura } from 'src/app/modelo/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private guardar:string="http://localhost:8080/api/savF";
  private listar:string="http://localhost:8080/api/listF";
  private borrar: string = 'http://localhost:8080/api/delF';
  private buscar: string = "http://localhost:8080/api/buscF";
  private edit: string = "http://localhost:8080/api/modiF";

factuObj: Factura[] = [];

  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }




  //Metodo para guardar
  create(factuObj: Factura):Observable<Factura>{
    return this.http.post<Factura>(this.guardar, factuObj,{headers:this.httpHeaders})
  }

  //Metodo para listar
  getFactura(): Observable<Factura[]> {
    return this.http
      .get(this.listar)
      .pipe(map((response) => response as Factura[]));
  }
  
    //Metodo para buscar
    getFacturaId(id:number):Observable<Factura>{
      return this.http.get<Factura>(this.buscar+"/"+id);
  }

  

      //Metodo para modificar
      updateFactura(factuObj:Factura){
        return this.http.put<Factura>(this.edit+"/"+factuObj.id_factura,factuObj);
    }
  //Metodo para eliminar
  eliminarFactura(id: any): Observable<Factura> {
    return this.http.delete<Factura>(this.borrar + '/' + id);
  }
}
