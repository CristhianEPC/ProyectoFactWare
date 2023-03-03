import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/modelo/Inventario';
import { Inventario2 } from 'src/app/modelo/inventario2';
import { Producto } from 'src/app/modelo/Producto';
import { InventarioService } from 'src/app/servicios/api/inventario.service';
import { ProductoService } from 'src/app/servicios/api/producto.service';
// import html2canvas from 'html2canvas';
//  import jsPDF from 'jspdf';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import { ProveedorService } from 'src/app/servicios/api/proveedor.service';
import { Proveedor } from 'src/app/modelo/Proveedor';
@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.css']
})
export class ReporteVentasComponent implements OnInit {
  productos: Producto[] = [];
  listaInventario: Inventario2[]=[];
  personas: Persona[] = [];
  proveedor: Proveedor[] = [];
    constructor(private service:ProductoService, private inventarioService: InventarioService, private personaService: PersonaService, private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.service.getProducto()
    .subscribe(data=>{
      this.productos=data;
    })

    this.listarInventario();
    this.listaProveedor();

  }
  listarInventario():void{
    this.inventarioService.getInventario().subscribe(
      listainvent=>this. listaInventario=listainvent );

      this.listarPerso();
}



listarPerso() {

  this.personaService.listarPersona().subscribe(data => {
    this.personas = data;
    console.log(this.personas);
  });

}


listaProveedor() {
  this.proveedorService.getProveedor()
    .subscribe(data => {
      this.proveedor = data;
    })
}










//tslint:disable-next-line:typedef
// downloadPDF() {
//   const DATA = document.getElementById('htmlData')!;
//   const doc = new jsPDF('p', 'pt', 'a4');
//   const options = {
//     background: 'white',
//     scale: 3
//   };
//   html2canvas(DATA, options).then((canvas) => {

//     const img = canvas.toDataURL('image/PNG');

//   //Add image Canvas to PDF
//      const bufferX = 15;
//    const bufferY = 15;
//     const imgProps = (doc as any).getImageProperties(img);
//     const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
//      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//     doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
//      return doc;
//   }).then((docResult) => {
//      docResult.save(`${new Date().toISOString()}_registros_productos.pdf`);
//   });
// }



// downloadPDFInventario() {
//   const DATA = document.getElementById('htmlDataInventario')!;
//   const doc = new jsPDF('p', 'pt', 'a4');
//   const options = {
//     background: 'white',
//     scale: 3
//   };
//   html2canvas(DATA, options).then((canvas) => {

//     const img = canvas.toDataURL('image/PNG');

//   //Add image Canvas to PDF
//      const bufferX = 15;
//    const bufferY = 15;
//     const imgProps = (doc as any).getImageProperties(img);
//     const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
//      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//     doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
//      return doc;
//   }).then((docResult) => {
//      docResult.save(`${new Date().toISOString()}_registros_inventario.pdf`);
//   });
// }


// downloadPDFPersonas() {
//   const DATA = document.getElementById('htmlDataPersonas')!;
//   const doc = new jsPDF('p', 'pt', 'a4');
//   const options = {
//     background: 'white',
//     scale: 3
//   };
//   html2canvas(DATA, options).then((canvas) => {

//     const img = canvas.toDataURL('image/PNG');

//   //Add image Canvas to PDF
//      const bufferX = 15;
//    const bufferY = 15;
//     const imgProps = (doc as any).getImageProperties(img);
//     const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
//      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//     doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
//      return doc;
//   }).then((docResult) => {
//      docResult.save(`${new Date().toISOString()}_registros_personas.pdf`);
//   });
// }


// downloadPDFVentas() {
//   const DATA = document.getElementById('htmlDataVentas')!;
//   const doc = new jsPDF('p', 'pt', 'a4');
//   const options = {
//     background: 'white',
//     scale: 3
//   };
//   html2canvas(DATA, options).then((canvas) => {

//     const img = canvas.toDataURL('image/PNG');

//   //Add image Canvas to PDF
//      const bufferX = 15;
//    const bufferY = 15;
//     const imgProps = (doc as any).getImageProperties(img);
//     const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
//      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//     doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
//      return doc;
//   }).then((docResult) => {
//      docResult.save(`${new Date().toISOString()}_registros_ventas.pdf`);
//   });
// }



// downloadPDFProveedores() {
//   const DATA = document.getElementById('htmlDataProveedores')!;
//   const doc = new jsPDF('p', 'pt', 'a4');
//   const options = {
//     background: 'white',
//     scale: 3
//   };
//   html2canvas(DATA, options).then((canvas) => {

//     const img = canvas.toDataURL('image/PNG');

//   //Add image Canvas to PDF
//      const bufferX = 15;
//    const bufferY = 15;
//     const imgProps = (doc as any).getImageProperties(img);
//     const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
//      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//     doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
//      return doc;
//   }).then((docResult) => {
//      docResult.save(`${new Date().toISOString()}_registros_proveedores.pdf`);
//   });
// }
}