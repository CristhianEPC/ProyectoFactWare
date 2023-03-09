import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { Producto } from 'src/app/modelo/Producto';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import { ProductoService } from 'src/app/servicios/api/producto.service';
import { MatDialog } from '@angular/material/dialog';

import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, startWith, Subject } from 'rxjs';
import { AgregarProducComponent } from '../agregar-produc/agregar-produc.component';
import { DetalleFactura2 } from 'src/app/modelo/detalleFactura';
import { DetalleFacturaService } from 'src/app/servicios/api/detalle-factura.service';
import { Factura2 } from 'src/app/modelo/factur';
import { Factura } from 'src/app/modelo/Factura';
import { FacturaService } from 'src/app/servicios/api/factura.service';
import { DetalleFact } from 'src/app/modelo/DetalleFact';
import Swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as moment from 'moment';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  //VARIABLES PARA DETALLE-FACTURA
  nuev = [];
  ivapre: DetalleFactura2;
  idFactura;
  product: Producto;
  cantidad;
  subTotal: number;
  total: number;
  iva: number = 0;

  //variable de total final
  totalFinal: number;
  subtotaIva: number = 0;
  subtotaCero: number = 0;
  subtotaIva12: number = 0;

  //VARIABLES PARA FACTURA
  fact2: Factura2 = new Factura2();
  fac: Factura2 = new Factura2();
  facN = [];
  idfact;
  fecha;
  numfac: string;
  perso: Persona;
  tableData ;
  verSeleccion: string = '';

  productos: Producto[] = [];
  producto: Producto[] = [];
  personas: Persona[] = [];
  factura: Factura[] = [];
  detal: DetalleFactura2[] = [];

  filterPost = '';
  filterPost2 = '';
  consumidorfinal = "";

  headers: string[] = [ 'NOMBRE', 'CANT.', 'PRECIO', 'TOTAL'];
  datos: any[] = [];




  constructor(
    private service: ProductoService,
    private personaService: PersonaService,
    private router: Router,
    private detalleService: DetalleFacturaService,
    private factService: FacturaService
  ) {

  }

  ngOnInit(): void {

    // this.service.getProducto()
    //   .subscribe(data => {
    //     this.productos = data;
    //     console.log(this.productos);

    //   })
    this.listaProducto();
    this.listarPerso();
    this.listaFacturas();
    this.totalFinal = 0.00;

  }
  vali: number = 1;

  //PARA EL CONSUMIDOR FINAL
  consumidor() {


    if (document.getElementById('check').click) {
      this.consumidorfinal = "9999999999999";
      this.vali = this.vali + 1;
      console.log(this.vali);
    }

    if (this.vali == 3) {
      console.log(this.vali);
      this.consumidorfinal = "000000000000";
      this.vali = 1;
    }

  }

  //LISTARES DE LAS CLASES

  listaProducto() {
    this.service.getProducto()
      .subscribe(data => {
        this.productos = data;
      })
  }

  //LISTAR PERSONAS
  listarPerso() {

    this.personaService.listarPersona().subscribe(data => {
      this.personas = data;
    });

  }

  //BUSCAR LA FACTURA RECIEN CREADA
  listarFactura() {
    this.factService.getFacturaId(this.fact2.id_factura)
      .subscribe(data => {
        this.fact2 = data;
      })
  }
  //LISTAR LAS FACTURAS SACAR EL TOTAL DE FACTURAS
  listaFacturas() {
    this.factService.getFactura().subscribe(data => {
      this.numfac = "000" + (data.length + 1);
    })
  }

  //PARA LISTAR ATRAVES DEL ID DE LA FACTURA LOS DETALLES
  listarDeta() {
    this.detalleService.getDetalleIdFactura(this.fact2.id_factura)
      .subscribe(data => {
        //this.fac = data;
        this.facN = data;
      })

  }

  // PARA DIRIGIR A CREAR UNA NUEVA PERSONA

  Agregar() {
    this.router.navigate(['vendedor/regCliente']);
  }

  // TRANFORMAR UN OBJETO A ARRAY
  private productosE$ = new Subject<Producto[]>();

  detalle: DetalleFactura2;

  agregarProduc(producto1: Producto, inputValue: string) {

    this.verSeleccion = inputValue;
    this.producto.push(producto1);
    this.productosE$.next(this.producto);
    this.productosE$.subscribe(data => {
      this.producto = data;

      // console.log(data);
      // console.log("tres " + this.producto);
    })


    this.product = producto1;

    //PARA VALIDAR QUE HAYA UNA FACTURA PRIMERO
    if (this.fact2.id_factura != 0) {
      //PARA VALIDAR PRODUCTOS EN STOCK
      if ((producto1.stock) >= (+this.verSeleccion)) {
        this.listaDetalle();
        this.listarDeta();
      } else {
        Swal.fire({
          title: 'Productos Faltantes',
          icon: 'warning',
          iconColor: '#0a0a0a', //color negro
          color: "#9e0e0e", //color rojo
          confirmButtonColor: "#0c3255", //color azul
          background: "#fcfcfc", //color blanco
        })
        //alert("ya no hay productos")
      }
    } else {
      Swal.fire({
        title: 'Falta Datos en la Factura',
        icon: 'warning',
        iconColor: '#0a0a0a', //color negro
        color: "#9e0e0e", //color rojo
        confirmButtonColor: "#0c3255", //color azul
        background: "#fcfcfc", //color blanco
      })
      //Poner el mensaje
      //alert("Ingrese los datos de la factura")
    }



  }

  //LISTANDO EN LA NUEVA LISTA 
  listaDetalle() {

    //this.idFactura = 1;
    //this.idProducto = this.productos[0].id_producto;
    this.cantidad = this.verSeleccion;
    this.subTotal = this.product.pvp_producto;
    this.total = Math.round(this.product.pvp_producto * (+this.verSeleccion) * 100) / 100;
    this.iva = Math.round(((this.subtotaIva) + (this.total * 0.12)) * 100) / 100;
    console.log("estoy en el total 2 " + this.total)

    this.nuev = [this.idFactura, this.product, this.verSeleccion, this.subTotal]


    console.log(this.nuev);


 

    /*
    this.detalle = {

      "factura": this.fact2,
      "cantidad": +this.verSeleccion,
      "producto": this.product,
      "iva": this.iva,
      "subTotal": +this.subTotal,
      "total": this.total,
      "id_detalle": 0,

  

    }*/



//LLENAR DATOS

this.detalle = new DetalleFactura2(this.fact2, this.cantidad, this.product,  this.iva, this.subTotal,this.total, 0);

for (let item of this.detalle) {
  console.log(item);
}

      this.datos.push([this.detalle.producto.nombre_producto, this.detalle.cantidad, this.detalle.subTotal, this.detalle.total]);
    











    console.log("aqui" + this.detalle);

    //METODO PARA CREAR EL DETALLE EN LA BASE

    //if (this.fact2.id_factura != 0) {
    console.log("el stock" + this.product.stock);
    // if ((this.product.stock) >= (+this.verSeleccion)) {
    this.detalleService.create(this.detalle)
      .subscribe(data => {
        this.totalFinal = Math.round((this.totalFinal + this.total) * 100) / 100;
        if (this.product.constIva == true) {
          this.subtotaIva = Math.round(((this.subtotaIva) + (this.total * 0.12)) * 100) / 100;
          this.subtotaIva12 = Math.round((this.subtotaIva12 + ((this.total * 0.12) + this.total)) * 100) / 100;
          this.totalAPagar = Math.round((this.subtotaIva12 + this.subtotaCero) * 100) / 100;
        } else {
          this.subtotaCero = Math.round((this.subtotaCero + this.total) * 100) / 100;
          this.totalAPagar = Math.round((this.subtotaCero + this.subtotaIva12) * 100) / 100;
        }


        this.listarFactura();
        this.listarDeta();
        console.log("creado")

      })


  }

  // METODO PARA GUARDAR UNA FACTURA
  factuNueva: Factura2;
  consumidorFinal: Persona;

  guardar(fact: Factura2) {

    //TRAER EL CONSUMIDOR FINAL
    this.personaService.getPersonaId(1).
      subscribe(data => {
        this.consumidorFinal = data;
        console.log(data.apellido_persona + " " + data.nombre_persona);
      })

    //VALIDACION PARA FACTURA
    if (fact.fecha != null) {

      if (this.fac.persona != undefined || this.fac.persona != null || this.vali != 1) {

        //VALIDACION DE CONSUMIDOR FINAL
        if (this.vali == 2) {

          Swal.fire({
            title: '¿Asignar factura con consumidor final?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'SI',
            denyButtonText: `NO`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              //PONER EL CODIGO A EJECUTAR
              this.factuNueva = {
                "numeroFact": this.numfac,
                "fecha": fact.fecha,
                "persona": this.consumidorFinal,
                "id_factura": 0
              }

              this.factService.create(this.factuNueva)
                .subscribe(data => {
                  this.fact2 = data;
                  Swal.fire({
                    title: 'Factura Asignada con Consumidor F.',
                    icon: 'success',
                    iconColor: '#17550c',
                    color: "#0c3255",
                    confirmButtonColor: "#0c3255",
                    background: "#63B68B",
                  })

                  //console.log("creado factura");
                })

              //this.nuevaFactura();

              //FIN DEL CODIGO A EJECUTAR
              //Swal.fire('Listo!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Desabilite el check', '', 'info')
            }
          })

        } else {
          this.factuNueva = {
            "numeroFact": this.numfac,
            "fecha": fact.fecha,
            "persona": fact.persona,
            "id_factura": 0
          }

          this.factService.create(this.factuNueva)
                .subscribe(data => {
                  this.fact2 = data;
                  Swal.fire({
                    title: 'Factura Asignada con Persona',
                    icon: 'success',
                    iconColor: '#17550c',
                    color: "#0c3255",
                    confirmButtonColor: "#0c3255",
                    background: "#63B68B",
                  })

                  //console.log("creado factura");
                })

          //this.nuevaFactura();
        }

      } else {
        Swal.fire({
          title: 'Campos de llenar en factura',
          icon: 'warning',
          iconColor: '#0a0a0a', //color negro
          color: "#9e0e0e", //color rojo
          confirmButtonColor: "#0c3255", //color azul
          background: "#fcfcfc", //color blanco
        })
      }
    } else {

      Swal.fire({
        title: 'Campos de llenar en factura',
        icon: 'warning',
        iconColor: '#0a0a0a', //color negro
        color: "#9e0e0e", //color rojo
        confirmButtonColor: "#0c3255", //color azul
        background: "#fcfcfc", //color blanco
      })
    }






    console.log("---- " + this.vali)
    //console.log("claro "+document.getElementById("idpersona").textContent.toString())

  }


  //METODO PARA ELIMINAR EL DETALLE AL QUITAR
  eliminar(detal: DetalleFactura2): void {
    Swal.fire({
      title: '¿Esta Seguro?',
      text: "No será capaz de revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        //AQUI COLOCAR EL CÓDIGO
        this.detalleService.eliminarDetalle(detal)
          .subscribe(data => {
            //this.ivapre = detal;
            this.detalleService.resutarar(detal).subscribe(data => {
              console.log("se restauro en el stock")
            })

            this.totalFinal = Math.round((this.totalFinal - detal.total) * 100) / 100;
            //console.log("gggg " +detal.producto.constIva);
            if (detal.producto.constIva == true) {
              this.subtotaIva = Math.round(((this.subtotaIva) - (detal.total * 0.12)) * 100) / 100;
              this.subtotaIva12 = Math.round((this.subtotaIva12 - ((detal.total * 0.12) + detal.total)) * 100) / 100;
              this.totalAPagar = Math.round((this.totalAPagar - ((detal.total * 0.12) + detal.total)) * 100) / 100;
            } else {
              this.subtotaCero = Math.round((this.subtotaCero - detal.total) * 100) / 100;
              this.totalAPagar = Math.round((this.totalAPagar - detal.total) * 100) / 100;
            }

            //this.totalAPagar = Math.round((this.subtotaIva + this.totalFinal) * 100) / 100;

            this.listarDeta();
            //this.facN = this.facN.filter(p => p !== detal);
          })
        //FIN DEL BLOQUE DE CÓDIGO
        Swal.fire(
          'Borrado!',
          'Su archivo ha sido borrado.',
          'success'

        )
      }
    })


    // if (confirm('¿Seguro deseas quitar este Producto?')) {

    // }

    //this.listarDeta();

  }

  //PARA RECAGAR LA PAGINA Y GENERAR LA FACTURA
  generar() {

    Swal.fire({
      title: 'Generar la Factura?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Generar',
      denyButtonText: `No Generar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.createPdf();
        //PONER EL CODIGO A EJECUTAR
        window.location.reload();
        //FIN DEL CODIGO A EJECUTAR
        Swal.fire('Listo!', '', 'success')
     
      } else if (result.isDenied) {
        Swal.fire('Cancelado', '', 'info')
      }
    })


    // if (confirm("¿Generar Factura?")) {
    //   Swal.fire({
    //     title: 'Factura Generada éxitosamente',
    //     icon: 'success',
    //     iconColor: '#17550c',
    //     color: "#0c3255",
    //     confirmButtonColor: "#0c3255",
    //     background: "#63B68B",
    //   })
    //   //this.router.navigate(['vendedor/vendedor']);

    // }

  }


  //CALCULAR EL VUELTO
  vuelto1: number = 0;
  vuelto2: number = 0;
  calcuVuelto() {
    this.vuelto1;
    console.log("estoy precionando")
    //this.vuelto2=this.vuelto1-100;
    this.vuelto2 = this.totalAPagar;
  }

  //CALCULAR EL DESCUENTO
  descuento1: number = 0;
  descuento2: number = 0;
  totalAPagar: number = 0;
  calcuDescuen() {
    this.descuento2 = Math.round(((this.totalAPagar) * (this.descuento1 / 100)) * 100) / 100;
    this.totalAPagar = Math.round((this.totalAPagar - this.descuento2) * 100) / 100;
  }

  //ESCANER PARA EL CODIGO DE BARRAS
  escaner() {
    Swal.fire({
      title: 'Dispositivo No Encontrado',
      icon: 'error',
      iconColor: '#0a0a0a', //color negro
      color: "#9e0e0e", //color rojo
      confirmButtonColor: "#0c3255", //color azul
      background: "#fcfcfc", //color blanco
    })
  }


















//DATOS PARA EL PDF

fechaActual: string = new Date().toLocaleDateString('es-ES');

fechaActual2: Date = new Date();

  horaActual: string = this.fechaActual2.toLocaleTimeString();

datoscliente:Persona = new Persona();
nombreCliente:string;
apellidoCliente:string;
cedulaCliente:string;
correoCliente:string;
teleCliente:string;





datosProduct: Producto= new Producto();



idpro:number;
nombreprodut:string;







encontrarPersona(){

  


  let id =  this.factuNueva.persona;
  console.log(id);

  this.personaService.getPersonaId(Number(id))
  .subscribe(data=>{
    this.datoscliente=data;
    console.log(this.datoscliente);
    this.nombreCliente=this.datoscliente.nombre_persona;
    console.log(this.nombreCliente);
    this.apellidoCliente=this.datoscliente.apellido_persona;
    console.log(this.apellidoCliente);
    this.cedulaCliente=this.datoscliente.cedula;
    console.log(this.cedulaCliente);
    this.correoCliente=this.datoscliente.correo_persona;
    console.log(this.correoCliente);
    this.teleCliente=this.datoscliente.telefono_persona;
    console.log(this.teleCliente);
    console.log(this.fechaActual);
    console.log(this. horaActual);



/*
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

    //console.log(this.detalle);

    const users = [    
      {
    name: this.detalle.producto.nombre_producto, 
    age: this.detalle.cantidad, 
    email:this.detalle.subTotal , 
    sex:this.detalle.total 
      }
     // { name: this.detalle.producto.nombre_producto, age: this.detalle.cantidad, email:this.detalle.subTotal , sex:this.detalle.total }
    ];

    console.log(users);
    const dynamicArray = [];

    Object.keys(users).forEach(key => {

      dynamicArray.push({
        label: key,
        value: users[key]
      });
      console.log(dynamicArray)
    });*/











  })

}















 
/*
crearTabla(objeto: any): any[] {
  objeto= this.nuev = [this.idFactura, this.product, this.verSeleccion, this.subTotal]

  this.nuev = [this.idFactura, this.product, this.verSeleccion, this.subTotal]


  console.log(this.nuev);

  const tableData = [];
  // Crear encabezado
  const headerRow = [];
  for (const key in objeto) {
    headerRow.push({ text: key, style: 'header' });
  }
  tableData.push(headerRow);
  // Crear fila
  const row = [];
  for (const key in objeto) {
    row.push(objeto[key]);
  }
  tableData.push(row);
  console.log(tableData);
  return tableData;
}
*/








createPdf() {
  const tableData = [this.headers].concat(this.datos);

  const pdfDefinition: any = {

    pageMargins: [ 40, 60, 40, 60 ],
    pageBorders: {
      borderWidth: 3,
      borderColor: '#000000',
      borderStyle: 'solid'
    },



    content: [
       {
         image: 'data:image/png;base64,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',
         
         fit: [250, 250],
         alignment: 'center',
        },

        {
          text:[
            '\n',    
            '\n', 
            '\n', 
            '\n',    
          ],

        },

        {
          columns: [
            {

              // auto-sized columns have their widths based on their content
              
           
              with:'auto',
              
              table: {
                headerRows: 1,
                widths: [ 120, 90],
        
                header: {
                  fillColor: '#CCCCCC',
                  content: [
                    { text: 'Encabezado 1', style: 'tableHeader', border: [false, false, false, true] },
                    { text: 'Encabezado 2', style: 'tableHeader', border: [false, false, false, true] },
                    { text: 'Encabezado 3', style: 'tableHeader', border: [false, false, false, true] },
    
                  ]
                },
        
                body: [
                  [ 'N° FACTURA ', this.numfac],
                  [ 'RUC ', '1706481029001'],
                  [ 'FECHA DE EMISIÓN ', this.fechaActual],
                  [ 'HORA DE EMISIÓN',  this.horaActual],
               

                  
                ]
              }

            },

           
            {
             
              // fixed width
              width: 'auto',
              table: {
                headerRows: 1,
                widths: [ 60, '*'],
  
                header: {
                  fillColor: '#CCCCCC',
                  content: [
                    { text: 'Encabezado 1', style: 'tableHeader', border: [false, false, false, true] },
                    { text: 'Encabezado 2', style: 'tableHeader', border: [false, false, false, true] },
                    { text: 'Encabezado 3', style: 'tableHeader', border: [false, false, false, true] },
    
                  ]
                },
        
                body: [
                  [ 'Cédula ', this.cedulaCliente],
                  [ 'Nombre ', this.nombreCliente +'  '+this.apellidoCliente],           
                  [ 'Teléfono', this.teleCliente ],
                  [ 'Correo', this.correoCliente],
                  
                  
                ]
              }
            }
            
          ],
          // optional space between columns
          columnGap: 5
        },



        {
          text:[
            '\n',
            '\n',
            '\n',
   
      
          ],
           
        style: 'header',
        //  color: 'red',
        
          bold: false,
          fontSize: 11,
          alignment: 'center'


        },

//DATOS CLIENTE
       
        {
          text:[
            '\n',
          ],
           
        },

        {
          canvas: [
            {
              type: 'line',
              x1: 0, y1: 5, // punto inicial (0,5)
              x2: 595-2*40, y2: 5, // punto final (595-2*40,5)
              lineWidth: 20,
              lineColor: '#aaaaaa'

            }
          ]
        },

        {
          text:[
            '\n',
            '\n',
            '\n',
          ],
        },


        {
          columns: [

            {
              // auto-sized columns have their widths based on their content
        
              width: 'auto',
                layout: 'lightHorizontalLines',
                 style: 'tableExample',
                
                 table: {
                   headerRows: 1,
                   widths: ['auto', '*', '*', 'auto'],
                   body: tableData
                 }

                 /*
                 table: {
                   widths: [110, 40, 50, 40],
                   body: [
                     ['NOMBRE', 'CANT.', 'PRECIO','TOTAL'],

                     ...[
                      { name: this.detalle.producto.nombre_producto, age: this.detalle.cantidad, email:this.detalle.subTotal , sex:this.detalle.total},
           
                      
                   ].map(user => [user.name, user.age, user.email, user.sex])
          
             
                    
                     
                   ]
                 }*/
             
               
            },
            {



            },

            
            {
              // star-sized columns fill the remaining space
              // if there's more than one star-column, available width is divided equally
              width: 'auto',
              //layout: 'lightHorizontalLines',
              style: 'tableExample',
              table: {
                widths: [120, 60],
                body: [
                  ['SUBTOTAL 0%', this.totalFinal],
                  ['SUBTOTAL 12%', this.subtotaIva12],
                  ['DESCUENTO',this.descuento2],
                  ['IVA 12%',this.subtotaIva],
                  ['TIPO DE PAGO', 'Efectivo'],       
                  ['EFECTIVO RECIBIDO',this.vuelto1],       
                  ['VUELTO', this.vuelto1-this.vuelto2],           
                  ['TOTAL', this.totalAPagar],
              
                ]
              }
              
            },
           
          ],
          // optional space between columns
          columnGap: 5
        },


         {
          text:[
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
    
            '\n',
          ],
        },


        
         {
          canvas: [
            {
              type: 'line',
              x1: 0, y1: 5, // punto inicial (0,5)
              x2: 595-2*40, y2: 5, // punto final (595-2*40,5)
              lineWidth: 20,
              lineColor: '#aaaaaa'

            }
          ]
        },

        {
          text:[
            '\n',
            '\n',

          ],
        },


        {
          columns: [
            {
              // auto-sized columns have their widths based on their content
              width: 'auto',
              text: 'DIRECCIÓN'
            },
            {
              // star-sized columns fill the remaining space
              // if there's more than one star-column, available width is divided equally
              width: '*',
              text: 'CUENCA - ECUADOR'
            },
           
          ],
          // optional space between columns
          columnGap: 10
        },

    ],

   

/*

    stylesTabladetalle : {
      header: {
        bold: true,
        fontSize: 14,
        color: 'black'
      },
      cell: {
        fontSize: 12,
        color: 'gray'
      }
    },



    styles3: {


      tableHeader: {
        bold: true,
        fontSize: 12,
        color: 'black'
      }
    },
  
    defaultStyle: {
      border: [false, false, false, false],
    
    }*/

    
  }
  const fileName = `Factura_${moment().format('YYYY-MM-DD')}.pdf`;

  //const pdf = pdfMake.createPdf(pdfDefinition);
  const pdf = pdfMake.createPdf(pdfDefinition).download(fileName);

//pdf.open();

// pdf.download('${new Date().toISOString()}_Factura.pdf');
}

























}
