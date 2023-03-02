import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventario } from 'src/app/modelo/Inventario';
import { Inventario2 } from 'src/app/modelo/inventario2';
import { Producto } from 'src/app/modelo/Producto';
import { InventarioService } from 'src/app/servicios/api/inventario.service';
import { ProductoService } from 'src/app/servicios/api/producto.service';
import Swal from 'sweetalert2';
//import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-guardarinventario',
  templateUrl: './guardarinventario.component.html',
  styleUrls: ['./guardarinventario.component.css']
})
export class GuardarinventarioComponent implements OnInit {
  listaProductos: Producto[]=[];

 inventarios= new Inventario2();
/*inven:any ={
  fecha:null,
  stock:null,
  cantid:null,
  idpro:null
}*/

  constructor(private router:Router, private serviceInventario:InventarioService, private serviceProduc:ProductoService ) { }

  ngOnInit(): void {

    this.serviceProduc.getProducto().subscribe(
      listaProd=>this. listaProductos=listaProd );
  }

/*SaveData(form:NgForm){
console.log('emviandodatos')
console.log(form);
console.log(form);
}*/

Listado() {
  this.router.navigate(['admin/regisInvent']);
}


  guardarInventario(inventario:Inventario2){
    this.serviceInventario.createInventario(inventario)
    .subscribe(data=>  
      Swal.fire({
        title: 'Inventario Guardado éxitosamente',
        icon: 'success',
        iconColor :'#17550c',
        color: "#0c3255",
        confirmButtonColor:"#0c3255",
        background: "#63B68B",
      }))
  }










}
