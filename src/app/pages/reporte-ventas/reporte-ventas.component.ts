import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/modelo/Inventario';
import { Inventario2 } from 'src/app/modelo/inventario2';
import { Producto } from 'src/app/modelo/Producto';
import { InventarioService } from 'src/app/servicios/api/inventario.service';
import { ProductoService } from 'src/app/servicios/api/producto.service';

@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.css']
})
export class ReporteVentasComponent implements OnInit {
  productos: Producto[] = [];
  listaInventario: Inventario2[]=[];

  constructor(private service:ProductoService, private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.service.getProducto()
    .subscribe(data=>{
      this.productos=data;
    })

    this.listarInventario();

  }
  listarInventario():void{
    this.inventarioService.getInventario().subscribe(
      listainvent=>this. listaInventario=listainvent );
}
}