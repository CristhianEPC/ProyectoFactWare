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

  //Variables de registrar el producto
  constIva: boolean = false;
  vali:number=0;
  utilida:number;
  pvp:number;

  listaProveedor: Proveedor[] = [];
  producto = new Producto2();
  productoN = new Producto2();

  constructor(private router: Router, private service: ProductoService, private service2: ProveedorService) { }

  ngOnInit(): void {
    this.service2.getProveedor().subscribe(
      listaProve => this.listaProveedor = listaProve
    );
  }

guardar(producto: Producto2) {

  this.utilida =Math.round((this.producto.utilidad_producto/100)*100)/100 ;
  this.pvp = (producto.costo_producto *this.utilida)+producto.costo_producto;
  console.log(this.utilida);

this.productoN={
  "id_producto":0,
  "nombre_producto": producto.nombre_producto,
  "descripcion_producto":producto.descripcion_producto,
  "codigoBarras_producto":producto.codigoBarras_producto,
  "costo_producto":producto.costo_producto,
  "utilidad_producto": producto.costo_producto*this.utilida,
  "pvp_producto" : Math.round(this.pvp * 100)/100 ,
  "estadoIVA_producto":producto.estadoIVA_producto,
  "stock":producto.stock,
  "constIva": this.constIva,
  "proveedor":producto.proveedor
}

console.log(this.productoN)
    


    this.service.createProducto(this.productoN)
      .subscribe(data => {
        Swal.fire({
          title: 'Producto Guardado éxitosamente',
          icon: 'success',
          iconColor: '#17550c',
          color: "#0c3255",
          confirmButtonColor: "#0c3255",
          background: "#63B68B",
        })
        //alert("Se guardo...!!")
        this.router.navigate(['admin/crudProduc']);
      })
  }
  

  tieneIVA() {

    if (document.getElementById('check').click) {  
      this.vali = this.vali+1;
      console.log(this.vali);
    }

    if(this.vali==1){
      console.log("es verdadero")
      this.constIva = true;
    }

    if(this.vali==2){
      console.log("es falso")
      this.constIva = false;
      this.vali=0;
    }
    
  }

}
