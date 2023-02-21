export interface User {
    id_usuario: number;
    user:       string;
    password:   string;
    persona:    Persona[];
    rol:        Rol[];
}

interface Persona {
    id_persona:        number;
    cedula:            string;
    nombre_persona:    string;
    apellido_persona:  string;
    direccion_persona: string;
    telefono_persona:  string;
    correo_persona:    string;
}

interface Rol {
    id_rol:     number;
    nombre_rol: string;
}