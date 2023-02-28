import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelo/Usuarios';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import { EditarusuarioComponent } from '../editarusuario/editarusuario.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
@Component({
  selector: 'app-listadousuarios',
  templateUrl: './listadousuarios.component.html',
  styleUrls: ['./listadousuarios.component.css']
})
export class ListadousuariosComponent implements OnInit {
  listaUsuarios: Usuarios[]=[];

usuarioss = new Usuarios();

filterPost = '';

  constructor(private usuariosService: UsuariosService, public dialog: MatDialog , private router: Router
    ) { }



  ngOnInit(): void {
 this.listarUsuarios();


  }







  listarUsuarios():void{
    this.usuariosService.getUsuarios().subscribe(
      listausua=>this. listaUsuarios=listausua );
  

}


eliminar(id_usuario: number) {
  if(confirm('¿Seguro que desea eliminar este usuario?')){  
    this.usuariosService.eliminarUsuario(id_usuario).subscribe(
      res => this.usuariosService.getUsuarios().subscribe(
        listausua=>this. listaUsuarios=listausua 
      )
    );
  }
}



AgregarNuevo() {
  this.router.navigate(['admin/regisempl']);
}




EditarUsuari(usuario: Usuarios): void {
  localStorage.setItem("id", usuario.id_usuario.toString());
  this.usuarioss  = usuario
  this.router.navigate(['admin/editusuario']);
}


}
