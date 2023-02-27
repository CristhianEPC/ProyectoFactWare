import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdmiComponent } from './admi/admi.component';
import { PagesComponent } from './pages.component';
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
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';

const routes : Routes = [
  {path:"admin", component:PagesComponent,
  children : [
    {path:"", component:AdmiComponent},
    {path:"crudempl", component:CrudEmpleadoComponent},
    {path:"regisempl", component:RegistrarEmpleadoComponent},
    {path:"listadousua", component:ListadousuariosComponent},
    {path:"crudAdmin", component:CrudAdministradorComponent},
    {path:"regisAdmin", component:RegistroAdministradorComponent},
    {path:"crudProduc", component:CrudProductoComponent},
    {path:"regisProduc", component:RegistroProductoComponent},
    {path:"crudProvee", component:CrudProveedorComponent},
    {path:"regisProvee", component:RegistroProveedorComponent},
    {path:"crudInvent", component:CrudInventarioComponent},
    {path:"regisInvent", component:RegistroInventarioComponent},
    {path:"reporte", component:ReporteVentasComponent},
    {path:"editProve", component:EditarProveedorComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
