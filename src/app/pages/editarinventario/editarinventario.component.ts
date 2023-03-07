import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/modelo/Inventario';
import { InventarioService } from 'src/app/servicios/api/inventario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { data } from 'jquery';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/servicios/api/producto.service';

@Component({
  selector: 'app-editarinventario',
  templateUrl: './editarinventario.component.html',
  styleUrls: ['./editarinventario.component.css']
})
export class EditarinventarioComponent implements OnInit {
 inventario:Inventario = new Inventario();
producto:Producto = new Producto();
  constructor(private router: Router,private serviceInventario:InventarioService, private serviceProducto:ProductoService) { }

  ngOnInit(): void {
  this.Editar();
  }


  Editar() {

    let id = localStorage.getItem("id");
    let id2 = localStorage.getItem("id2");
    this.serviceProducto.getProductoId(Number(id))
    .subscribe(data=>{
      this.producto = data;
      console.log(data);
    })
    this.serviceInventario.getInventarioId(Number(id))
    .subscribe(data=>{
      this.inventario = data;
      console.log(data);
    })


 

  }

 

    Actualizar(inventario: Inventario) {
      this.serviceInventario.updateInventario(inventario)
      .subscribe(data =>  
        Swal.fire({
          title: 'Inventario modificado éxitosamente',
          icon: 'success',
          iconColor :'#17550c',
          color: "#0c3255",
          confirmButtonColor:"#0c3255",
          background: "#63B68B",
        }))
    }
  

    
    Listado() {
      this.router.navigate(['admin/regisInvent']);
    }
    
    
   

}
