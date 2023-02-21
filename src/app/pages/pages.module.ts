import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { AdmiComponent } from './admi/admi.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CrudEmpleadoComponent } from './crud-empleado/crud-empleado.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { CrudAdministradorComponent } from './crud-administrador/crud-administrador.component';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';
import { CrudProductoComponent } from './crud-producto/crud-producto.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { CrudProveedorComponent } from './crud-proveedor/crud-proveedor.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';
import { CrudInventarioComponent } from './crud-inventario/crud-inventario.component';
import { RegistroInventarioComponent } from './registro-inventario/registro-inventario.component';
import { ReporteVentasComponent } from './reporte-ventas/reporte-ventas.component';



@NgModule({
  declarations: [
    PagesComponent,
    AdmiComponent,
    CrudEmpleadoComponent,
    RegistrarEmpleadoComponent,
    CrudAdministradorComponent,
    RegistroAdministradorComponent,
    CrudProductoComponent,
    RegistroProductoComponent,
    CrudProveedorComponent,
    RegistroProveedorComponent,
    CrudInventarioComponent,
    RegistroInventarioComponent,
    ReporteVentasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
    
  ],
  exports:[
    AdmiComponent,
    CrudEmpleadoComponent,
    RegistrarEmpleadoComponent,
    CrudAdministradorComponent,
    RegistroAdministradorComponent,
    CrudProductoComponent,
    RegistroProductoComponent,
    CrudProveedorComponent,
    RegistroProveedorComponent,
    CrudInventarioComponent,
    RegistroInventarioComponent,
    ReporteVentasComponent
  ]
})
export class PagesModule { }
