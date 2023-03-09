import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DetalleFactura2 } from 'src/app/modelo/detalleFactura';
import { Producto } from 'src/app/modelo/Producto';
import { Producto2 } from 'src/app/modelo/producto2';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    private guardar: string = "http://localhost:8080/api/productos/savPr";
    private listar: string = "http://localhost:8080/api/productos/lisPr";
    private buscar: string = "http://localhost:8080/api/productos";
    private edit: string = "http://localhost:8080/api/productos";
    private elimi: string = "http://localhost:8080/api/productos";
    private listStock: string = "http://localhost:8080/api/productos/lisStoc";
    private listVenta: string = "http://localhost:8080/api/productos/masVendido";


    productoObj: Producto[]=[];

    constructor(private http:HttpClient){}

    //Metodo para guardar
    createProducto(productoObj:Producto2):Observable<Producto2>{
        return this.http.post<Producto2>(this.guardar,productoObj);
    }

    //Metodo para listar
    getProducto():Observable<Producto[]>{
        return this.http
        .get(this.listar)
        .pipe(map((response) => response as Producto[]));
    }

    //Metodo para buscar
    getProductoId(id:number):Observable<Producto2>{
        return this.http.get<Producto2>(this.buscar+"/"+id);
    }

    //Metodo para modificar
    updateProducto(productoObj:Producto2){
        return this.http.put<Producto2>(this.edit+"/"+productoObj.id_producto,productoObj);
    }

    //Metodo eliminar
    deleteProducto(productoObj:Producto){
        return this.http.delete<Producto>(this.elimi+"/"+productoObj.id_producto);
    }

    //Metodo de stock
    getStock():Observable<Producto[]>{
        return this.http
        .get(this.listStock)
        .pipe(map((response) => response as Producto[]));
    }

    //Metodo mas vendedidos
    getVendido():Observable<DetalleFactura2[]>{
        return this.http
        .get(this.listVenta)
        .pipe(map((response) => response as DetalleFactura2[]));
    }
}  