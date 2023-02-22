import { Rol } from '../../modelo/rol'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private guardar:string="http://localhost:8080/api/savR";
  private listar:string="http://localhost:8080/api/lisR";

rolObj: Rol[] = [];

  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }




  //Metodo para guardar
  create(rolObj: Rol):Observable<Rol>{
    return this.http.post<Rol>(this.guardar, rolObj,{headers:this.httpHeaders})
  }

  //Metodo para listar
  getRoles(): Observable<Rol[]> {
    return this.http
      .get(this.listar)
      .pipe(map((response) => response as Rol[]));
  }
}