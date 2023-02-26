import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/servicios/api/producto.service';

@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.css']
})
export class ReporteVentasComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private service:ProductoService) { }

  ngOnInit(): void {
    this.service.getProducto()
    .subscribe(data=>{
      this.productos=data;
    })
  }

}
