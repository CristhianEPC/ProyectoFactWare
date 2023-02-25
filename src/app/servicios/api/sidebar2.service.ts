import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Sidebar2Service {

    menu2: any[] = [{
        icono: 'nav-icon fas fa-tachometer-alt',
        titulo: "Factura",
        submenu: [
            { titulo: 'Registro de Factura', url: 'vendedor', icono: 'fas fa-cubes' }
        ]
    },
    {
        icono: 'nav-icon fas  fa-user',
        titulo: "Clientes",
        submenu: [
            { titulo: 'Crud Cliente', url: 'crudCliente', icono: 'fas fa-cubes' },
            { titulo: 'Registro Cliente', url: 'regCliente', icono: 'fas  fa-user-plus' }
        ]
    }]
}