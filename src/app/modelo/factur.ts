export class Factura2{

    id_factura: number=0;
    numeroFact:string="";
    fecha :Date;
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