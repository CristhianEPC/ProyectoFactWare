import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Pages2Component } from './pages2.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { CrudClienteComponent } from './crud-cliente/crud-cliente.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

const routes : Routes = [
  {path:"vendedor", component:Pages2Component,
  children : [
    {path:"vendedor",component:VendedorComponent},
    {path:"crudCliente",component:CrudClienteComponent},
    {path:"regCliente",component:RegistrarClienteComponent},
    {path:"editCliente",component:EditarClienteComponent}
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
export class Pages2RoutingModule { }
