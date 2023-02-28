import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Persona } from 'src/app/modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  private guardar:string="http://localhost:8080/api/savP";
  private listar:string="http://localhost:8080/api/lisP";
  private borrar: string = 'http://localhost:8080/api/delInvent';

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

  //Metodo para eliminar
  deletePersona(id: any): Observable<Persona> {
    return this.http.delete<Persona>(this.borrar + '/' + id);
  }

}
