import { Injectable } from '@angular/core';
import { Persona } from '../../modelo/Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  private guardar:string="http://localhost:8080/api/savP";
  private listar:string="http://localhost:8080/api/lisP";

personaObj: Persona[] = [];

  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }




  //Metodo para guardar
  create(personaObj: Persona):Observable<Persona>{
    return this.http.post<Persona>(this.guardar, personaObj,{headers:this.httpHeaders})
  }

  //Metodo para listar
  getPersonas(): Observable<Persona[]> {
    return this.http
      .get(this.listar)
      .pipe(map((response) => response as Persona[]));
  }


  
  listarPersona():Observable<Persona[]>{
    return this.http.get(this.listar).pipe(
      map(response=> response as Persona[])
    );
  }
}
