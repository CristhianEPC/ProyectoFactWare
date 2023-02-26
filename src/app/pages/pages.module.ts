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
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSliderModule } from "@angular/material/slider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from '@angular/material/tabs';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { EditarusuarioComponent } from './editarusuario/editarusuario.component';
import { GuardarinventarioComponent } from './guardarinventario/guardarinventario.component';
import { EditarinventarioComponent } from './editarinventario/editarinventario.component';
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
    GuardarinventarioComponent,
    EditarinventarioComponent,
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
    MatPaginatorModule,
    MatTooltipModule ,
    MatButtonToggleModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSidenavModule ,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatTabsModule,
    MatBottomSheetModule
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
