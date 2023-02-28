import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/modelo/Inventario';
import { InventarioService } from 'src/app/servicios/api/inventario.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Inventario2 } from 'src/app/modelo/inventario2';

@Component({
  selector: 'app-registro-inventario',
  templateUrl: './registro-inventario.component.html',
  styleUrls: ['./registro-inventario.component.css']
})
export class RegistroInventarioComponent implements OnInit {

  listaInventario: Inventario[]=[];
 inven: Inventario2[] = [];
 inventar = new Inventario2();

  
  constructor(private inventarioService: InventarioService, public dialog: MatDialog ,private router: Router
    ) { }




  ngOnInit(): void {
 this.listarInventario();

 
  }
  listarInventario():void{
    this.inventarioService.getInventario().subscribe(
      listainvent=>this.inven = listainvent );
  

}

AgregarNuevo() {
  this.router.navigate(['admin/formuinventario']);
}

eliminar(id_inventario: number) {
  if(confirm('¿Seguro que desea eliminar este registro?')){  
    this.inventarioService.eliminarInventario(id_inventario).subscribe(
      res => this.inventarioService.getInventario().subscribe(
        listainvent=>this.inven=listainvent
      )
    );
  }
}


EditarInve(inventarios:Inventario2): void  {
  localStorage.setItem("id", inventarios.id_inventario.toString());
    this.inventar = inventarios
  this.router.navigate(['admin/editinventario']);
}

}
