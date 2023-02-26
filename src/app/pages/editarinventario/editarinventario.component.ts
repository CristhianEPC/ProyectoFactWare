import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/modelo/Inventario';
import { InventarioService } from 'src/app/servicios/api/inventario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarinventario',
  templateUrl: './editarinventario.component.html',
  styleUrls: ['./editarinventario.component.css']
})
export class EditarinventarioComponent implements OnInit {
 inventario:Inventario = new Inventario();
  constructor(private router: Router,private serviceInventario:InventarioService) { }

  ngOnInit(): void {
  }


  Editar() {

    let id = localStorage.getItem("id");
    this.serviceInventario.getProveedorId(Number(id))
    .subscribe(data=>{
      this.inventario = data;
    })


  }

  Actualizar(inventario: Inventario) {
    this.serviceInventario.updateInventario(inventario)
      .subscribe(data => {
        this.inventario = data;
        alert("Se Actualiazo");
      })
    }
    
    Listado() {
      this.router.navigate(['admin/regisInvent']);
    }
    

}
