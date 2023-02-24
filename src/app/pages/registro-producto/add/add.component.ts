import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/servicios/api/producto.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  producto= new Producto;
  constructor(private router:Router, private service:ProductoService) { }

  ngOnInit() {
  }

  Guardar(producto:Producto){
    this.service.createProducto(producto)
    .subscribe(data=>{
      alert("Se Agrego con exito");
      this.router.navigate(["listar"]);
    })
  }

}
