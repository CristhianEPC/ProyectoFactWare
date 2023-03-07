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
            { titulo: 'Asignar Usuarios', url: 'regisempl', icono: 'fas  fa-street-view' },
            { titulo: 'Listado de Personas', url: 'crudAdmin', icono: 'fas fa-tasks' },
            { titulo: 'Registro de Personas', url: 'regisAdmin', icono: 'fas  fa-user-plus' }
        ]
    },

    {
        icono: 'nav-icon  fas fa-cubes ',
        titulo: "Producto",
        submenu: [
            { titulo: 'Listado de Productos', url: 'crudProduc', icono: 'fas fa-tasks' },
            { titulo: 'Registro de Productos', url: 'regisProduc', icono: ' fas fa-check-circle' }

        ]
    },

    {
        icono: 'nav-icon fas fa-truck',
        titulo: "Proveedor",
        submenu: [
            { titulo: 'Listado de Proveedores', url: 'crudProvee', icono: 'fas fa-tasks' },
            { titulo: 'Registro de Proveedor', url: 'regisProvee', icono: 'fas  fa-check-circle' }

        ]
    },

    {
        icono: 'nav-icon fas  fa-archive',
        titulo: "Inventario",
        submenu: [
         /*   { titulo: 'Crud Inventario', url: 'crudInvent', icono: 'fas fa-cubes' },*/
            { titulo: 'Registro de Inventario', url: 'regisInvent', icono: 'fas fa-check-square' }

        ]
    },

    {
        icono: 'nav-icon fas fas fa-balance-scale',
        titulo: "Reportes",
        submenu: [
            { titulo: 'Generar reporte', url: 'reporte', icono: 'fas  fa-download' }

        ]
    },
]
}