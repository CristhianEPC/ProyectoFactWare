import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Inventario } from 'src/app/modelo/Inventario';
import { InventarioService } from 'src/app/servicios/api/inventario.service';

@Component({
  selector: 'app-registro-inventario',
  templateUrl: './registro-inventario.component.html',
  styleUrls: ['./registro-inventario.component.css']
})
export class RegistroInventarioComponent implements OnInit {

  listaInventario: Inventario[]=[];

  
  constructor(private inventarioService: InventarioService, public dialog: MatDialog 
    ) { }



  ngOnInit(): void {
 this.listarInventario();

 
  }
  listarInventario():void{
    this.inventarioService.getInventario().subscribe(
      listainvent=>this. listaInventario=listainvent );
  

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



}
