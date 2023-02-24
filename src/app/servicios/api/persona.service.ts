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
  private buscar:string="http://localhost:8080/api/busc";
  private edit:string="http://localhost:8080/api/modiP";
  private elimi:string="http://localhost:8080/api/delP";
  

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


  //Metodo de buscar
  getPersonaId(id:number){
    return this.http.get<Persona>(this.buscar+"/"+id);
  }

  //Metodo modificar
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.edit+"/"+persona.id_persona,persona);
  }

  //Metodo de eliminar
  deletePersona(persona:Persona){
return this.http.delete<Persona>(this.elimi+"/"+persona.id_persona)
  }

}
