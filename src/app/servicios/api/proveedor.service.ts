import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Proveedor } from 'src/app/modelo/Proveedor';

@Injectable({
    providedIn: 'root'
})
export class ProveedorService {

    private guardar: string = "http://localhost:8080/api/savProve";
    private listar: string = "http://localhost:8080/api/lisProve";
    private buscar: string = "http://localhost:8080/api/buscProve";
    private edit: string = "http://localhost:8080/api/modiProve";
    private elimi: string = "http://localhost:8080/api/delProve";

    proveedorObj: Proveedor[]=[];

    constructor(private http:HttpClient){}

    //Metodo para guardar
    create(proveedorObj:Proveedor):Observable<Proveedor>{
        return this.http.post<Proveedor>(this.guardar,proveedorObj);
    }

    //Metodo para listar
    getProveedor():Observable<Proveedor[]>{
        return this.http
        .get(this.listar)
        .pipe(map((response) => response as Proveedor[]));
    }

    //Metodo para buscar
    getProveedorId(id:number):Observable<Proveedor>{
        return this.http.get<Proveedor>(this.buscar+"/"+id);
    }

    //Metodo para modificar
    updateProveedor(proveedorObj:Proveedor){
        return this.http.put<Proveedor>(this.edit+"/"+proveedorObj.id_proveedor,proveedorObj);
    }

    //Metodo eliminar
    deleteProveedor(proveedorObj:Proveedor){
        return this.http.delete<Proveedor>(this.elimi+"/"+proveedorObj.id_proveedor);
    }
}  