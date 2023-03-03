export class Factura2{

    id_factura: number=0;
    num_factura:number=0;
    stock: number=0;
    fecha :string="";
    persona:Persona | undefined;
   
   }

   interface Persona{
    id_persona: number;
    cedula: string;
    nombre_persona : string;
    apellido_persona : string;
    direccion_persona : string;
    telefono_persona : string;
    correo_persona : string;
   }