import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/servicios/api/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto:Producto = new Producto();

  constructor(private router: Router,private service:ProductoService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {

    let id = localStorage.getItem("id");
    console.log(id);
    this.service.getProductoId(Number(id))
    .subscribe(data=>{
      this.producto = data;
    })

    // if (id != null) {
    //   this.service.getProveedorId(+id)
    //     .subscribe(data => {
    //       console.log(data);
    //       this.proveedor = data;
    //     })
    // }

  }

  Actualizar(producto: Producto) {
    this.service.updateProducto(producto)
      .subscribe(data => {
        this.producto = data;
        alert("Se Actualiazo");
        this.router.navigate(['admin/crudProduc'])
      })
  }

}
