

export class Producto2{
 
    id_producto: number=0;
    nombre_producto: string="";
    descripcion_producto : string="";
    codigoBarras_producto: number=0;
    costo_producto : number=0;
    pvp_producto : number=0.0;
    utilidad_producto: number=0;
    estadoIVA_producto : string="";
    stock: number = 0;
    constIva:boolean;
    proveedor : Proveedor |undefined;

}

interface Proveedor {
    id_proveedor:number;
    direccion_proveedor:string;
    nombre:string;
    telefono:string;
}