import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pages2Component } from './pages2.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CrudClienteComponent } from './crud-cliente/crud-cliente.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BuscarproducventPipe } from './vendedor/buscarproducvent.pipe';
import { BuscarClientPipe } from './vendedor/buscar-client.pipe'
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';



@NgModule({
    declarations: [
        Pages2Component,
        VendedorComponent,
        CrudClienteComponent,
        RegistrarClienteComponent,
        BuscarproducventPipe,
        BuscarClientPipe,
        EditarClienteComponent
    ],
    exports: [
        VendedorComponent,
        CrudClienteComponent,
        RegistrarClienteComponent,
        EditarClienteComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        ReactiveFormsModule, FormsModule
    ]
})
export class Pages2Module { }
