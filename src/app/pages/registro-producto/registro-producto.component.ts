import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { Producto2 } from 'src/app/modelo/producto2';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { ProductoService } from 'src/app/servicios/api/producto.service';
import { ProveedorService } from 'src/app/servicios/api/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

  listaProveedor:Proveedor[]=[];
  producto = new Producto2();

  constructor(private router:Router,private service:ProductoService, private service2:ProveedorService) { }

  ngOnInit(): void {
    this.service2.getProveedor().subscribe(
      listaProve => this.listaProveedor=listaProve
    );
  }

  guardar(producto:Producto2){
    this.service.createProducto(producto)
    .subscribe(data=>{
      Swal.fire({
        title: 'Producto Guardado éxitosamente',
        icon: 'success',
        iconColor :'#17550c',
        color: "#0c3255",
        confirmButtonColor:"#0c3255",
        background: "#63B68B",
      })
      //alert("Se guardo...!!")
      this.router.navigate(['admin/crudProduc']);
    })
  }

}
