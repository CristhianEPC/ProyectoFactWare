import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Rol } from 'src/app/modelo/rol';

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
