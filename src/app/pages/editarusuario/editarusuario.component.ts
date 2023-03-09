import { Component, Inject, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelo/Usuarios';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {


usuario:Usuarios= new Usuarios();

    constructor( private usuarioService:UsuariosService,private router: Router,) {
  
  
    }
  
    ngOnInit() {
      this.Editar();
    }
   
    Editar() {

      let id = localStorage.getItem("id");
      this.usuarioService.getUsuarioId(Number(id))
      .subscribe(data=>{
        this.usuario = data;
      })

  
    }
    

  
    Actualizar(usuarios: Usuarios) {

      Swal.fire({
        title: '¿Desea modificar los campos?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'SI',
            denyButtonText: `NO`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
      //COLOCAR EL CODIGO A EJECUTAR
      this.usuarioService.updateUsuario(usuarios)
      .subscribe(data=>  
        Swal.fire({
          title: 'Usuario modificado éxitosamente',
          icon: 'success',
          iconColor :'#17550c',
          color: "#0c3255",
          confirmButtonColor:"#0c3255",
          background: "#63B68B",
        }))
              //FIN DEL CODIGO A EJECUTAR
          //Swal.fire('Modificado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Ningun campo modificado', '', 'info')
        }
      })

      
    }
  
  
    Listado() {
      this.router.navigate(['admin/listadousua']);
    }
    
  
    
}
