import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, Subject} from 'rxjs'
import { LoginUsuario} from 'src/app/modelo/login';
import { User } from 'src/app/modelo/user.interface';


const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpHeaders = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
  public loginStatusSubjec = new Subject<boolean>();

  url:string = 'http://localhost:8080/api/'
 

  constructor(private http: HttpClient) { }

  loginByEmail(form : LoginUsuario) : Observable<User>{
    let direccion = this.url + '';
    return this.http.post<User>(direccion, form, {headers: this.httpHeaders});
  }

  public getCurrentUser(form : LoginUsuario){
    let direccion2 = this.url + 'signin';
    return this.http.post(direccion2,form);
  }

  public setUser(user : any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public logout() {
    localStorage.removeItem('user');
    return true;
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  public getUserRole() {

    let user = this.getUser();
    return user.rol;
  }

 

  ////kjdkljsbdkljabdklb

  public saveUser(user : any) : void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUsers():any{
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      console.log('El parseo del user-->'+JSON.parse(user))
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log('En el strorage--> '+user);
    
    if (user) {
      return true;
    }

    return false;
  }
}
