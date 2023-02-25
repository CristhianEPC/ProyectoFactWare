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
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table' 
import { MatError, MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MatListModule} from '@angular/material/list';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { EditarusuarioComponent } from './editarusuario/editarusuario.component';
import { EditarInventarioComponent } from './editar-inventario/editar-inventario.component';
import { GuardarInventarioComponent } from './guardar-inventario/guardar-inventario.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
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
    ReporteVentasComponent,
    ListadousuariosComponent,
    EditarusuarioComponent,
    EditarInventarioComponent,
    GuardarInventarioComponent,
    EditarProveedorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatDividerModule,
    MatFormFieldModule,
    CdkStepperModule,
    MatCardModule,
    ScrollingModule,
    CdkAccordionModule,
    MatInputModule,
    MatButtonModule,
    FormsModule  ,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatListModule
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
    ReporteVentasComponent,
    ListadousuariosComponent,
    EditarusuarioComponent
  ]
})
export class PagesModule { }
