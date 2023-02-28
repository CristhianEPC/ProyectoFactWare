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
  private edit: string = "http://localhost:8080/api/modiInvent";
  private buscar: string = "http://localhost:8080/api/buscInvent";

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

   //Metodo para buscar
   getPersonaId(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.buscar+"/"+id);
}

   //Metodo para modificar
   updatePersona(ipersonaObj:Persona){
    return this.http.put<Persona>(this.edit+"/"+ipersonaObj.id_persona,ipersonaObj);
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
