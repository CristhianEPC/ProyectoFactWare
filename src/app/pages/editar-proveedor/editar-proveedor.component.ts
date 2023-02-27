import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { ProveedorService } from 'src/app/servicios/api/proveedor.service';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  proveedor:Proveedor = new Proveedor();

  constructor(private router: Router,private service:ProveedorService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {

    let id = localStorage.getItem("id");
    console.log(id);
    this.service.getProveedorId(Number(id))
    .subscribe(data=>{
      this.proveedor = data;
    })

    // if (id != null) {
    //   this.service.getProveedorId(+id)
    //     .subscribe(data => {
    //       console.log(data);
    //       this.proveedor = data;
    //     })
    // }

  }

  Actualizar(proveedor: Proveedor) {
    this.service.updateProveedor(proveedor)
      .subscribe(data => {
        this.proveedor = data;
        alert("Se Actualiazo");
        this.router.navigate(['admin/crudProvee'])
      })
  }

}
