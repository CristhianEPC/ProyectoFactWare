import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuarios } from 'src/app/modelo/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private guardar:string="http://localhost:8080/api/savU";
  private listar:string="http://localhost:8080/api/listU";
  private borrar: string = 'http://localhost:8080/api/delU';
  private buscar: string = "http://localhost:8080/api/buscU";
  private edit: string = "http://localhost:8080/api/modiU";

usuarioObj: Usuarios[] = [];

  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }




  //Metodo para guardar
  create(usuarioObj: Usuarios):Observable<Usuarios>{
    return this.http.post<Usuarios>(this.guardar, usuarioObj,{headers:this.httpHeaders})
  }

  //Metodo para listar
  getUsuarios(): Observable<Usuarios[]> {
    return this.http
      .get(this.listar)
      .pipe(map((response) => response as Usuarios[]));
  }
  
    //Metodo para buscar
    getUsuarioId(id:number):Observable<Usuarios>{
      return this.http.get<Usuarios>(this.buscar+"/"+id);
  }

  

      //Metodo para modificar
      updateUsuario(usuarioObj:Usuarios){
        return this.http.put<Usuarios>(this.edit+"/"+usuarioObj.id_usuario,usuarioObj);
    }
  //Metodo para eliminar
  eliminarUsuario(id: any): Observable<Usuarios> {
    return this.http.delete<Usuarios>(this.borrar + '/' + id);
  }
}
