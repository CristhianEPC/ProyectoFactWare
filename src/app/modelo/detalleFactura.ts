export class DetalleFactura2 {

    id_detalle: number = 0;
    cantidad: number = 0;
    iva: number = 0;
    subTotal: number = 0;
    total: number = 0;
    producto: Producto | undefined;
    factura: Factura | undefined;

}

interface Producto{
    id_producto: number ;
    nombre_producto: string ;
    descripcion_producto: string ;
    codigoBarras_producto: number ;
    costo_producto: number ;
    pvp_producto: number ;
    utilidad_producto: number ;
    estadoIVA_producto: string ;
    constIva:boolean;
    //id_proveedor: ;
    stock: number;
}

interface Factura {
    id_factura: number;
    numeroFact:string;
    fecha :Date;
   //id_persona:number=0;
}

