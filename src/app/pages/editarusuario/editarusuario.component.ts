import { Component, Inject, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelo/Usuarios';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {


usuario:Usuarios= new Usuarios();
myForm:FormGroup;
    constructor( private usuarioService:UsuariosService,private router: Router, public fb:FormBuilder) {
      this.myForm = fb.group({
        
        
        usuario: ['', Validators.required],
        contraseña: ['', Validators.required]
       
      })
  
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
      if (this.myForm.valid){
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
      }else{
        Swal.fire('Revise que los campos esten llenados correctamente')
      }
    }
  
  
    Listado() {
      this.router.navigate(['admin/listadousua']);
    }
    
  
    
}
