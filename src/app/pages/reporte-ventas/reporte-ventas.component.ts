import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/modelo/Inventario';
import { Producto } from 'src/app/modelo/Producto';
import { InventarioService } from 'src/app/servicios/api/inventario.service';
import { ProductoService } from 'src/app/servicios/api/producto.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.css']
})
export class ReporteVentasComponent implements OnInit {
  productos: Producto[] = [];
  listaInventario: Inventario[]=[];

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

// tslint:disable-next-line:typedef
downloadPDF() {
  const DATA = document.getElementById('htmlData')!;
  const doc = new jsPDF('p', 'pt', 'a4');
  const options = {
    background: 'white',
    scale: 3
  };
  html2canvas(DATA, options).then((canvas) => {

    const img = canvas.toDataURL('image/PNG');

    // Add image Canvas to PDF
    const bufferX = 15;
    const bufferY = 15;
    const imgProps = (doc as any).getImageProperties(img);
    const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
    return doc;
  }).then((docResult) => {
    docResult.save(`${new Date().toISOString()}_productosregistrados.pdf`);
  });
}



}