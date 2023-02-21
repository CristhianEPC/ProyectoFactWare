export class Usuario{
    id_usuario: number = 0;
	user: string = "";
	password: string = "";
	persona: Persona | undefined;
	rol: Rol | undefined;
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