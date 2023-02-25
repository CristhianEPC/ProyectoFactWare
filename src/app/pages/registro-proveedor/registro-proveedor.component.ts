import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { ProveedorService } from 'src/app/servicios/api/proveedor.service';

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
    this.service.create(proveedor)
    .subscribe(data=>{
      alert("Se guardo...!!")
      this.router.navigate(['admin/crudProvee']);
    })
  }

}
