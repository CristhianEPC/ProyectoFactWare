import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/modelo/Inventario';
import { InventarioService } from 'src/app/servicios/api/inventario.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-inventario',
  templateUrl: './registro-inventario.component.html',
  styleUrls: ['./registro-inventario.component.css']
})
export class RegistroInventarioComponent implements OnInit {

  listaInventario: Inventario[]=[];
 inven: Inventario[] = [];
  
 inventarios = new Inventario();
  
  constructor(private inventarioService: InventarioService, public dialog: MatDialog ,private router: Router
    ) { }




  ngOnInit(): void {
 this.listarInventario();

 
  }
  listarInventario():void{
    this.inventarioService.getInventario().subscribe(
      listainvent=>this. listaInventario=listainvent );
  

}

AgregarNuevo() {
  this.router.navigate(['admin/formuinventario']);
}

eliminar(id_inventario: number) {
  if(confirm('¿Seguro que desea eliminar este usuario?')){  
    this.inventarioService.eliminarInventario(id_inventario).subscribe(
      res => this.inventarioService.getInventario().subscribe(
        listainvent=>this. listaInventario=listainvent
      )
    );
  }
}

EditarInve(inventarios:Inventario): void {
  localStorage.setItem("id", inventarios.id_inventario.toString());
  console.log(inventarios.id_producto)

  this.router.navigate(['admin/editinventario']);

}

}
