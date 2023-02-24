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
            { titulo: 'Crud Empleado', url: 'crudempl', icono: 'fas  fa-edit' },
            { titulo: 'Registro Empleado', url: 'regisempl', icono: ' fas  fa-user-plus' },
            { titulo: 'Listado de Usuarios', url: 'listadousua', icono: 'fas fa-list' },
            { titulo: 'Crud Administrador', url: 'crudAdmin', icono: 'fas   fa-edit' },
            { titulo: 'Registro Administrador', url: 'regisAdmin', icono: 'fas fa-users' }
        ]
    },

    {
        icono: 'nav-icon fas fa-tasks',
        titulo: "Producto",
        submenu: [
            { titulo: 'Crud Producto', url: 'crudProduc', icono: 'fas fa-cubes' },
            { titulo: 'Registro Producto', url: 'regisProduc', icono: ' fa-plus-square' }

        ]
    },

    {
        icono: 'nav-icon fas fa-truck ',
        titulo: "Proveedor",
        submenu: [
            { titulo: 'Crud Proveedor', url: 'crudProvee', icono: 'fas fa-users' },
            { titulo: 'Registro Proveedor', url: 'regisProvee', icono: 'fas fa-users' }

        ]
    },

    {
        icono: 'nav-icon fas fa-tachometer-alt',
        titulo: "Inventario",
        submenu: [
            { titulo: 'Crud Inventario', url: 'crudInvent', icono: 'fas fa-cubes' },
            { titulo: 'Registro Inventario', url: 'regisInvent', icono: 'fas fa-users' }

        ]
    },

    {
        icono: 'nav-icon fas fa-balance-scale',
        titulo: "Reporte",
        submenu: [
            { titulo: 'Reporte de Ventas', url: 'reporte', icono: 'fas fa-shopping-cart' }

        ]
    },
]
}