import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Usuarios } from 'src/app/modelo/Usuarios';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import { EditarusuarioComponent } from '../editarusuario/editarusuario.component';
@Component({
  selector: 'app-listadousuarios',
  templateUrl: './listadousuarios.component.html',
  styleUrls: ['./listadousuarios.component.css']
})
export class ListadousuariosComponent implements OnInit {
  listaUsuarios: Usuarios[]=[];

  
  constructor(private usuariosService: UsuariosService, public dialog: MatDialog 
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











openDialog(usuario: Usuarios ) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = "55%";
  dialogConfig.autoFocus = true;
  const dialogRef = this.dialog.open(EditarusuarioComponent,{
    width: "55%",
    data: usuario
  });

  dialogRef.afterClosed().subscribe(result =>{
    this.listarUsuarios();
  })

}
}
