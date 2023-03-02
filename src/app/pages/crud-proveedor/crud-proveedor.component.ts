import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { ProveedorService } from 'src/app/servicios/api/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-proveedor',
  templateUrl: './crud-proveedor.component.html',
  styleUrls: ['./crud-proveedor.component.css']
})
export class CrudProveedorComponent implements OnInit {

  proveedor: Proveedor[] = [];
  proveed = new Proveedor();
  constructor(private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit(): void {
    this.listaProveedor();
  }

  nuevo() {
    this.router.navigate(['admin/regisProvee']);
  }

  listaProveedor() {
    this.proveedorService.getProveedor()
      .subscribe(data => {
        this.proveedor = data;
      })
  }

  editar(proveedor: Proveedor): void {
    localStorage.setItem("id", proveedor.id_proveedor.toString());
    console.log(proveedor.id_proveedor)
    this.proveed = proveedor;
    this.router.navigate(['admin/editProve']);
  }

  eliminar(proveedor: Proveedor): void {
    if (confirm('¿Seguro deseas eliminar este proveedor?')) {
      this.proveedorService.deleteProveedor(proveedor)
        .subscribe(data => {
          this.proveedor = this.proveedor.filter(p => p !== proveedor);
          Swal.fire({
            title: 'Proveedor Eliminado éxitosamente',
            icon: 'success',
            iconColor :'#17550c',
            color: "#0c3255",
            confirmButtonColor:"#0c3255",
            background: "#63B68B",
          })
          //alert("Se elimino...!!")
        });
    }

  }
}
