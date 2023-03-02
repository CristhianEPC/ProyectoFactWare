import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { Producto } from 'src/app/modelo/Producto';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import { ProductoService } from 'src/app/servicios/api/producto.service';
import { MatDialog } from '@angular/material/dialog';

import { FormControl , FormBuilder , FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { AgregarProducComponent } from '../agregar-produc/agregar-produc.component';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  productos: Producto[] = [];
  producto: Producto[] = [];
  personas: Persona[] = [];

filterPost = '';
filterPost2 = '';

  constructor(private service:ProductoService, private personaService: PersonaService, private router: Router, private productoService: ProductoService,) {  
  
  
  }

  ngOnInit(): void {

    this.service.getProducto()
    .subscribe(data=>{
      this.productos=data;
     console.log(this.productos);
      
    })
    this.listarPerso();


  }

 
  listaProducto() {
    this.productoService.getProducto()
      .subscribe(data => {
        this.producto = data;
      })
  }











  listarPerso() {

    this.personaService.listarPersona().subscribe(data => {
      this.personas = data;
    });

  }

  
  Agregar() {
    this.router.navigate(['vendedor/regCliente']);
  }
  
}
