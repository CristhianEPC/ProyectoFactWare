import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/servicios/api/producto.service';

@Component({
  selector: 'app-crud-producto',
  templateUrl: './crud-producto.component.html',
  styleUrls: ['./crud-producto.component.css']
})
export class CrudProductoComponent implements OnInit {

  producto: Producto[] = [];
  produ = new Producto();
  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.listaProducto();
  }

  nuevo() {
    this.router.navigate(['admin/regisProduc']);
  }

  listaProducto() {
    this.productoService.getProducto()
      .subscribe(data => {
        this.producto = data;
      })
  }

  editar(producto: Producto): void {
    localStorage.setItem("id", producto.id_producto.toString());
    console.log(producto.id_producto)
    this.produ = producto;
    this.router.navigate(['admin/editProduc']);
  }

  eliminar(producto: Producto): void {
    if (confirm('¿Seguro deseas eliminar este proveedor?')) {
      this.productoService.deleteProducto(producto)
        .subscribe(data => {
          this.producto = this.producto.filter(p => p !== producto);
          alert("Se elimino...!!")
        });
    }

  }
}
