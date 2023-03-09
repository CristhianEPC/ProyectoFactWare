import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { ProveedorService } from 'src/app/servicios/api/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  proveedor: Proveedor = new Proveedor();

  constructor(private router: Router, private service: ProveedorService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {

    let id = localStorage.getItem("id");
    console.log(id);
    this.service.getProveedorId(Number(id))
      .subscribe(data => {
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

    Swal.fire({
      title: '¿Desea modificar los campos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'SI',
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //COLOCAR EL CODIGO A EJECUTAR
        this.service.updateProveedor(proveedor)
          .subscribe(data => {
            this.proveedor = data;
            Swal.fire({
              title: 'Proveedor Modificada éxitosamente',
              icon: 'success',
              iconColor: '#17550c',
              color: "#0c3255",
              confirmButtonColor: "#0c3255",
              background: "#63B68B",
            })
            //alert("Se Actualiazo");
            this.router.navigate(['admin/crudProvee'])
          })
        //FIN DEL CODIGO A EJECUTAR
        //Swal.fire('Modificado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Ningun campo modificado', '', 'info')
      }
    })


  }

}
