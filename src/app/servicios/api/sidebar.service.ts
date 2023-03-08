import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SidebarService {

    menu: any[] = [
        {
        icono: 'nav-icon  fas fa-user',
        titulo: "Empleado",
        submenu: [
         /*   { titulo: 'Crud Empleado', url: 'crudempl', icono: 'fas fa-cubes' },*/
            { titulo: 'Asignar usuarios', url: 'regisempl', icono: 'fas fa-users' },
            { titulo: 'Listado Persona', url: 'crudAdmin', icono: 'fas fa-cubes' },
            { titulo: 'Registro Persona', url: 'regisAdmin', icono: 'fas fa-users' }
        ]
    },

    {
        icono: 'nav-icon  fas fa-tasks',
        titulo: "Producto",
        submenu: [
            { titulo: 'Listado Producto', url: 'crudProduc', icono: 'fas fa-cubes' },
            { titulo: 'Registro Producto', url: 'regisProduc', icono: 'fa-plus-square' }

        ]
    },

    {
        icono: 'nav-icon fas fa-truck',
        titulo: "Proveedor",
        submenu: [
            { titulo: 'Listado Proveedor', url: 'crudProvee', icono: 'fas fa-users' },
            { titulo: 'Registro Proveedor', url: 'regisProvee', icono: 'fas fa-users' }

        ]
    },

    {
        icono: 'nav-icon fas fa-tachometer-alt',
        titulo: "Inventario",
        submenu: [
         /*   { titulo: 'Crud Inventario', url: 'crudInvent', icono: 'fas fa-cubes' },*/
            { titulo: 'Registro Inventario', url: 'regisInvent', icono: 'fas fa-users' }

        ]
    },

    {
        icono: 'nav-icon fas fas fa-balance-scale',
        titulo: "Reportes",
        submenu: [
            { titulo: 'Generar', url: 'reporte', icono: 'fas  fa-folder' }

        ]
    },
]
}