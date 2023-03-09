import { Component, OnInit } from '@angular/core';
import { DetalleFact } from 'src/app/modelo/DetalleFact';
import { DetalleFactura2 } from 'src/app/modelo/detalleFactura';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/servicios/api/producto.service';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {

  listaProduc : Producto[] = [];
  listaVendido : DetalleFactura2[] = [];
  constructor(private servicio:ProductoService) { }

  ngOnInit(): void {

    this.servicio.getStock().subscribe(
      data =>{
        this.listaProduc = data;
      }
    )

    this.servicio.getVendido().subscribe(
      data => {
this.listaVendido = data;
      }
    )
  }

}
