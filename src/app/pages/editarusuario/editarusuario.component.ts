import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Usuarios } from 'src/app/modelo/Usuarios';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {

usuariosss:Usuarios[]=[];
public texusuario:string="";
public texcontrasenia:string="";
public idusuario:number=0;

listaUsuarios: Usuarios[]=[];
  constructor(    @Inject(MAT_DIALOG_DATA) public usuarioedi:Usuarios,     private usuarioService:UsuariosService,) {


    if(this.usuarioedi !==null){
this.texusuario=usuarioedi.user;
this.texcontrasenia=usuarioedi.password;
this.idusuario=usuarioedi.id_usuario;
    }
  }

  ngOnInit() {
   
  }
  usuarioss:Usuarios = new Usuarios();
  obtnerdatos(usuarioedi:Usuarios):Usuarios{
this.usuarioss.user=usuarioedi.user;
this.usuarioss.password=usuarioedi.password;
    return this.usuarioss;
  }
  
  listarUsuarios():void{
    this.usuarioService.getUsuarios().subscribe(
      listausua=>this. listaUsuarios=listausua );
  

}


  public update(id_usuario: number):void {
    this.usuarioService.actualizarUsuario(this.usuarioss).subscribe(
      res => this.usuarioService.getUsuarios().subscribe(
        listausua=>this. listaUsuarios=listausua 
      )
    );

    
   }
}
