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

  producto = new Producto();

  constructor(private router:Router,private service:ProductoService) { }

  ngOnInit(): void {
  }

  guardar(producto:Producto){
    this.service.createProducto(producto)
    .subscribe(data=>{
      alert("Se guardo...!!")
      this.router.navigate(['admin/crudProduc']);
    })
  }

}
