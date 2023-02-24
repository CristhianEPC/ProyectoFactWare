import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/servicios/api/producto.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

  productos: Producto[] = [];
  constructor(private router: Router, private service:ProductoService) { }
  Listar(){
    this.router.navigate(["listar"])
  }
  Nuevo(){
    this.router.navigate(["add"])
  }
  Editar(){
    this.router.navigate(["editar"])
  }

 
  ngOnInit(): void {
    this.service.getProducto()
    .subscribe(data=>{
      this.productos=data;
    })
  }
  
 
  }

 


