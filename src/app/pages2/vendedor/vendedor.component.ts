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

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  //VARIABLES PARA DETALLE-FACTURA
  nuev = [];
  idFactura;
  product:Producto;
  cantidad;
  subTotal;
  total;
  iva: number = 0.12;

  //VARIABLES PARA FACTURA
  fact2:Factura2 = new Factura2();
  fac=[];
  facN=[];
  idfact;
  fecha;
  numfac;
  perso:Persona;

  verSeleccion: string = '';

  productos: Producto[] = [];
  producto: Producto[] = [];
  personas: Persona[] = [];
  factura:Factura[]=[];
  detal:DetalleFactura2[]=[];

  filterPost = '';
  filterPost2 = '';
  consumidorfinal ="";
  constructor(
    private service: ProductoService, 
    private personaService: PersonaService, 
    private router: Router, 
    private detalleService: DetalleFacturaService,
    private factService:FacturaService
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


  }

  //PARA EL CONSUMIDOR FINAL
  consumidor(){

  
    if (document.getElementById('check').click)
  {
    this.consumidorfinal ="9999999999999";
  //alert('checkbox1 esta seleccionado');
  }
  
  }

//LISTARES DE LAS CLASES

  listaProducto() {
    this.service.getProducto()
      .subscribe(data => {
        this.productos = data;
      })
  }


  listarPerso() {

    this.personaService.listarPersona().subscribe(data => {
      this.personas = data;
    });

  }

  listarFactura(){
    this.factService.getFactura().subscribe(data =>{
      this.factura = data;
    })
  }

  listarDeta(){
    this.detalleService.getDetalle().subscribe(data =>{
      this.fac=data;
      this.facN = data;
      console.log(data.length)
      for (let index = 0; index < data.length; index++) {
        console.log("en el for")
        console.log(this.fact2.id_factura)
        console.log(this.fac[index].id_factura)
        if(this.fact2.id_factura==this.fac[index].id_factura){
          this.facN=this.fac[index];
      }
        
      }
      
    })
  }

  // PARA DIRIGIR A CREAR UNA NUEVA PERSONA

  Agregar() {
    this.router.navigate(['vendedor/regCliente']);
  }

// TRANFORMAR UN OBJETO A ARRAY
  private productosE$ = new Subject<Producto[]>();

  detalle: DetalleFactura2;

  agregarProduc(producto1: Producto ,inputValue: string) {

    this.verSeleccion = inputValue;
    this.producto.push(producto1);
    this.productosE$.next(this.producto);
    this.productosE$.subscribe(data => {
      this.producto = data;
      
      // console.log(data);
      // console.log("tres " + this.producto);
    })

    this.total = producto1.pvp_producto * (+this.verSeleccion);
    console.log(this.total)
    //this.idProducto = this.producto;
    this.product = producto1;

    this.listaDetalle();
    this.listarDeta();

  }

  //LISTANDO EN LA NUEVA LISTA
  listaDetalle() {

    this.idFactura = 1;
    //this.idProducto = this.productos[0].id_producto;
    this.cantidad = this.verSeleccion;
    this.subTotal = (+this.verSeleccion * this.iva) + this.verSeleccion;

    this.nuev = [this.idFactura, this.product, this.verSeleccion, this.subTotal]


    console.log(this.nuev);

    this.detalle = {
      "factura": this.fact2,
      "cantidad": +this.verSeleccion,
      "producto": this.product,
      "iva": this.iva,
      "subtotal": +this.subTotal,
      "total": this.total,
      "id_detalle": 0
    }

    console.log(this.detalle);

    //METODO PARA CREAR EL DETALLE
    this.detalleService.create(this.detalle)
    .subscribe(data=>{
      this.listarDeta();
      console.log("creado")

    })
  }

// METODO PARA GUARDAR UNA FACTURA
guardar(fact:Factura2){
  this.factService.create(fact)
  .subscribe(data=>{
    this.fact2 = data;

    console.log("creado factura");
  })
}


  eliminar(detal:DetalleFactura2): void {
    if (confirm('¿Seguro deseas eliminar este Persona?')) {
      this.detalleService.eliminarDetalle(detal)
      .subscribe(data =>{
        this.facN = this.facN.filter(p => p !== detal);
      })
    }

    this.listarDeta();

  }


}
