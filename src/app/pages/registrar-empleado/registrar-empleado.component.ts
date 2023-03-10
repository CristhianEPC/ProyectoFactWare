
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { Rol } from 'src/app/modelo/rol';
import { Usuarios } from 'src/app/modelo/Usuarios';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import { RolesService } from 'src/app/servicios/api/roles.service';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import Swal from 'sweetalert2';

import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  listaPersonas: Persona[]=[];
 usua : Usuario = new Usuario();
 hide = true;
usuarii:any ={
  idpero:null,
  idrol:null,
  user:null,
  pas:null
}

// SaveData(form:NgForm){
// console.log('emviandodatos')
// console.log(form);
// console.log(form);
// }

filterPost = '';
 personaSele = new Persona();
 listaRoles: Rol[]=[];
  constructor(private _formBuilder: FormBuilder,
    private personaService:PersonaService,
    private usuarioService:UsuariosService,
    private rolesService:RolesService,
    private router: Router) {}


  ngOnInit(): void {
   
    this.personaService.getPersonas().subscribe(
      listaPerso=>this. listaPersonas=listaPerso );
      this.rolesService.getRoles().subscribe(
        listaRol=>this. listaRoles=listaRol );
   
  }

 

  seleccionar(persona:Persona): void {
    localStorage.setItem("id",persona.id_persona.toString());
    console.log(persona.id_persona)
    this. personaSele= persona;
    
  }

  limpiar(){
    this.usua.persona = null;
    this.usua.user = "";
    this.usua.password = "";
    this.usua.rol = null;
  }

  guardarUsuario(usuario:Usuario){

    if(usuario.persona != null && usuario.user != ""
    && usuario.password != "" && usuario.rol != null){
      this.usuarioService.create(usuario)
    .subscribe(data=> 
      Swal.fire({
        title: 'Usuarios Guardado éxitosamente',
        icon: 'success',
        iconColor :'#17550c',
        color: "#0c3255",
        confirmButtonColor:"#0c3255",
        background: "#63B68B",
      }))
    } else {
      Swal.fire('Llene todos los campos', '', 'info')
    }

    

      console.log(usuario) ;
  }




  Listado() {
    this.router.navigate(['admin/listadousua']);
  }
  

}