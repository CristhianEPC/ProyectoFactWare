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

  verSeleccion: string = '';

  productos: Producto[] = [];
  producto: Producto[] = [];
  personas: Persona[] = [];
  factura: Factura[] = [];
  detal: DetalleFactura2[] = [];

  filterPost = '';
  filterPost2 = '';
  consumidorfinal = "";
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

    this.detalle = {
      "factura": this.fact2,
      "cantidad": +this.verSeleccion,
      "producto": this.product,
      "iva": this.iva,
      "subTotal": +this.subTotal,
      "total": this.total,
      "id_detalle": 0
    }

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

  nuevaFactura() {


  }


  //METODO PARA ELIMINAR EL DETALLE AL QUITAR
  eliminar(detal: DetalleFactura2): void {
    Swal.fire({
      title: 'Esta Seguro?',
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
    this.descuento2 = Math.round(((this.subtotaIva + this.totalFinal) * (this.descuento1 / 100)) * 100) / 100;
    this.totalAPagar = Math.round((this.subtotaIva12 - this.descuento2) * 100) / 100;
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

}
