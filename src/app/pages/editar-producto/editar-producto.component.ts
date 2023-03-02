import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/servicios/api/producto.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          title: 'Producto Modificada éxitosamente',
          icon: 'success',
          iconColor :'#17550c',
          color: "#0c3255",
          confirmButtonColor:"#0c3255",
          background: "#63B68B",
        })
        //alert("Se Actualiazo");
        this.router.navigate(['admin/crudProduc'])
      })
  }

}
