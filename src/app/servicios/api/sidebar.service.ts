import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SidebarService {

    menu: any[] = [
        {
        icono: 'nav-icon fas fa-tachometer-alt',
        titulo: "Empleado",
        submenu: [
            { titulo: 'Crud Empleado', url: 'crudempl', icono: 'fas fa-cubes' },
            { titulo: 'Registro Empleado', url: 'regisempl', icono: 'fas fa-users' },
            { titulo: 'Crud Administrador', url: 'crudAdmin', icono: 'fas fa-cubes' },
            { titulo: 'Registro Administrador', url: 'regisAdmin', icono: 'fas fa-users' }
        ]
    },

    {
        icono: 'nav-icon fas fa-tachometer-alt',
        titulo: "Producto",
        submenu: [
            { titulo: 'Crud Producto', url: 'crudProduc', icono: 'fas fa-cubes' },
            { titulo: 'Registro Producto', url: 'regisProduc', icono: 'fas fa-users' }

        ]
    },

    {
        icono: 'nav-icon fas fa-tachometer-alt',
        titulo: "Proveedor",
        submenu: [
            { titulo: 'Crud Proveedor', url: 'crudProvee', icono: 'fas fa-cubes' },
            { titulo: 'Registro Proveedor', url: 'regisProvee', icono: 'fas fa-users' }

        ]
    },

    {
        icono: 'nav-icon fas fa-tachometer-alt',
        titulo: "Inventario",
        submenu: [
            { titulo: 'Crud Inventario', url: 'crudInvent', icono: 'fas fa-cubes' },
            { titulo: 'Registro Inventario', url: 'regisProvee', icono: 'fas fa-users' }

        ]
    },

    {
        icono: 'nav-icon fas fa-tachometer-alt',
        titulo: "Reporte",
        submenu: [
            { titulo: 'Reporte de Ventas', url: 'reporte', icono: 'fas fa-cubes' }

        ]
    },
]
}