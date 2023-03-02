export class Inventario2 {

    id_inventario: number = 0;
    cantidad_inventario: number = 0;
    fechaEntrega: Date;
    producto: Producto | undefined;

}

interface Producto {

    id_producto: number ;
    nombre_producto: string ;
    descripcion_producto: string ;
    codigoBarras_producto: number ;
    costo_producto: number ;
    pvp_producto: number ;
    utilidad_producto: number ;
    estadoIVA_producto: string ;
    // id_proveedor: Proveedor;
}

// interface Proveedor{

//     id_proveedor: number;
//     nombre_proveedor: string;
//     direccion_proveedor : string;
//     telefono_proveedor : string;

// }