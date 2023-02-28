import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/modelo/Inventario';
import { InventarioService } from 'src/app/servicios/api/inventario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarinventario',
  templateUrl: './editarinventario.component.html',
  styleUrls: ['./editarinventario.component.css']
})
export class EditarinventarioComponent implements OnInit {
 inventario:Inventario = new Inventario();
  constructor(private router: Router,private serviceInventario:InventarioService) { }

  ngOnInit(): void {
  this.Editar();
  }


  Editar() {

    let id = localStorage.getItem("id");
    this.serviceInventario.getInventarioId(Number(id))
    .subscribe(data=>{
      this.inventario = data;
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
