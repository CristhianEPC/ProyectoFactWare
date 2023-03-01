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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MatFormFieldModule } from '@angular/material';
 import { MatInputModule } from '@angular/material';
 import { MatAutocompleteModule } from '@angular/material';
 import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AgregarProducComponent } from './agregar-produc/agregar-produc.component';

@NgModule({
    declarations: [
        Pages2Component,
        VendedorComponent,
        CrudClienteComponent,
        RegistrarClienteComponent,
        BuscarproducventPipe,
        BuscarClientPipe,
        AgregarProducComponent
     
    ],
    exports: [
        VendedorComponent,
        CrudClienteComponent,
        RegistrarClienteComponent,
        BuscarClientPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        ReactiveFormsModule, 
        FormsModule ,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AutocompleteLibModule

    ]
})
export class Pages2Module { }
