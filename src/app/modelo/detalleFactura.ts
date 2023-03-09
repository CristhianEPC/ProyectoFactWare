export class DetalleFactura2 {

    id_detalle: number = 0;
    cantidad: number = 0;
    iva: number = 0;
    subTotal: number = 0;
    total: number = 0;
    producto: Producto | undefined;
    factura: Factura | undefined;


    constructor(factura: Factura , cantidad: number,   producto: Producto,     iva: number ,  subTotal: number, total: number ,   id_detalle: number) {
        this.factura = factura;
        this.cantidad = cantidad;
        this. producto =  producto;
        this.iva=   iva;
        this. subTotal =  subTotal;
        this. total =  total;
        this. id_detalle =  id_detalle;
      }


// Define el método `[Symbol.iterator]()` que devuelve el iterador
[Symbol.iterator]() {
    let index = 0;
    const values = Object.values(this);

    // Define el método `next()` que devuelve el siguiente valor del iterador
    return {
      next: () => {
        if (index < values.length) {
          return { value: values[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }





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

