import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { Producto2 } from 'src/app/modelo/producto2';
import { ProductoService } from 'src/app/servicios/api/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  //Variables de registrar el producto
  constIva: boolean = false;
  vali:number=0;
  utilida:number;
  pvp:number;

  producto:Producto = new Producto();
  productoN = new Producto2();

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
