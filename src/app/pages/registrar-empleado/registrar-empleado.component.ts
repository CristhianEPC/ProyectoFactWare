import Swal from 'sweetalert2';
import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import {map, Observable, startWith} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Rol } from 'src/app/modelo/rol';
import { Persona } from 'src/app/modelo/Persona';
import { Usuarios } from 'src/app/modelo/Usuarios';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import { RolesService } from 'src/app/servicios/api/roles.service';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import {MatSelectionListChange} from "@angular/material/list";
@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  issloading=true;
  isexist?:boolean;
  isLinear = true;

  listaRoles: Rol[]=[];


  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  persona:Persona[]=[];
  personasselect: Persona= new Persona();
  usuario:Usuarios[]=[];

  filteredOptions?: Observable<Persona[]>;
  myControl = new FormControl();
 firstFormGroup: FormGroup |  null= null;
  secondFormGroup: FormGroup | null= null
  public asignaUsua: Usuarios= new Usuarios();



  constructor(private _formBuilder: FormBuilder,
    private personaService:PersonaService,
    private usuarioService:UsuariosService,
    private rolesService:RolesService,
    private router: Router) {}

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCotrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
   
  
    this.personaService.listarPersona().subscribe(data=>{
      this.persona=data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(values=>this.filter(values)),
      );
      this.issloading=false;
    });


    this.rolesService.getRoles().subscribe(
      listaRol=>this. listaRoles=listaRol );

  }

  

  // selectionPersona( event: MatSelectionListChange){
  //   this.personasselect=  event.options[0].value;


  // }

  filter(value: any): Persona[] {
    const filterValue = value.toLowerCase();
    return this.persona.filter(option => 
      option.cedula?.toLocaleLowerCase().includes(filterValue)
      ||option.nombre_persona?.toLocaleLowerCase().includes(filterValue)
      ||option.apellido_persona?.toLocaleLowerCase().includes(filterValue)
      ||option.correo_persona?.toLocaleLowerCase().includes(filterValue)
    );
  
  }
  opcionSeleccionado: string  = '0';

  datousuario: string = "";

  datocontrasenia: string = "";
  verSeleccion: string        = '';
 idRolUsuario: number = 0;
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

Asignarrol(){
if(this.verSeleccion=="Admin"){
this.idRolUsuario=1;
}else
{
  this.idRolUsuario=2;
}
}

  

usuarioss:Usuarios = new Usuarios();
obtnerdatos(persona:Persona):Usuarios{
  this.usuarioss.id_persona=persona.id_persona;
  this.usuarioss.id_rol=this.idRolUsuario;

  return this.usuarioss;
}








//Guardar Usuarios
guardarUsuario(persona:Persona):void{
  Swal.fire({
    title: 'Confirmación',
    text: "La persona se le ha asignado un usuario",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar',
    background: "#fbc02d"
  }).then((result) => {
    if (result.isConfirmed) {
      this.usuarioService.create(this.obtnerdatos(persona)).subscribe(value => {
        Swal.fire({
          title: 'Asignación Correcta',
          icon: 'success',
          iconColor :'#17550c',
          color: "#0c3255",
          confirmButtonColor:"#0c3255",
          background: "#63B68B",
        })
        
  
      })
    }
  })

}




}