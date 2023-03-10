import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { ProveedorService } from 'src/app/servicios/api/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.css']
})
export class RegistroProveedorComponent implements OnInit {

  proveedor = new Proveedor();

  constructor(private router:Router, private service:ProveedorService) { }

  ngOnInit(): void {
  }

  guardar(proveedor:Proveedor){

    if(proveedor.nombre_proveedor != "" && proveedor.direccion_proveedor != ""
    && proveedor.telefono_proveedor != "") {
       this.service.create(proveedor)
    .subscribe(data=>{
      Swal.fire({
        title: 'Proveedor Guardado éxitosamente',
        icon: 'success',
        iconColor :'#17550c',
        color: "#0c3255",
        confirmButtonColor:"#0c3255",
        background: "#63B68B",
      })
      //alert("Se guardo...!!")
      this.router.navigate(['admin/crudProvee']);
    })
    } else {
      Swal.fire('Llene todos los campos', '', 'info')
    }

   
  }

}
