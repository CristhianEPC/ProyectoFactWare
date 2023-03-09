import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Sidebar2Service {

    menu2: any[] = [{
        icono: 'nav-icon fas  fa-list-alt',
        titulo: "Factura",
        submenu: [
            { titulo: 'Registro de Factura', url: 'vendedor', icono: 'fas fa-plus-square' }
        ]
    },
    {
        icono: 'nav-icon fas  fa-user',
        titulo: "Clientes",
        submenu: [
            { titulo: 'Listado Cliente', url: 'crudCliente', icono: 'fas fa-tasks' },
            { titulo: 'Registro Cliente', url: 'regCliente', icono: 'fas  fa-user-plus' }
        ]
    }]
}