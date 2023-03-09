import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelo/Usuarios';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import { EditarusuarioComponent } from '../editarusuario/editarusuario.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listadousuarios',
  templateUrl: './listadousuarios.component.html',
  styleUrls: ['./listadousuarios.component.css']
})
export class ListadousuariosComponent implements OnInit {
  listaUsuarios: Usuarios[] = [];

  usuarioss = new Usuarios();

  filterPost = '';

  constructor(private usuariosService: UsuariosService, public dialog: MatDialog, private router: Router
  ) { }



  ngOnInit(): void {
    this.listarUsuarios();


  }







  listarUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe(
      listausua => this.listaUsuarios = listausua);


  }


  eliminar(id_usuario: number) {

    Swal.fire({
      title: '¿Esta Seguro?',
      text: "No será capaz de revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        //COLOCAR EL CODIGO A EJECUTAR
        this.usuariosService.eliminarUsuario(id_usuario).subscribe(
          res => this.usuariosService.getUsuarios().subscribe(
            listausua => this.listaUsuarios = listausua
          )
        );
        //FIN DEL CODIGO A EJECUTAR
        Swal.fire(
          'Borrado!',
          'Su archivo ha sido borrado.',
          'success'
        )
      }
    })


    if (confirm('¿Seguro que desea eliminar este usuario?')) {

    }
  }



  AgregarNuevo() {
    this.router.navigate(['admin/regisempl']);
  }




  EditarUsuari(usuario: Usuarios): void {
    localStorage.setItem("id", usuario.id_usuario.toString());
    this.usuarioss = usuario
    this.router.navigate(['admin/editusuario']);
  }


}
