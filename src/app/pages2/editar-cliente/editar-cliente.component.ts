import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
})
export class EditarClienteComponent implements OnInit {

  persona:Persona = new Persona();
myForm:FormGroup;
  constructor(private router: Router, private service: PersonaService, public fb:FormBuilder) { 
    this.myForm = fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.Editar();
  }


  Editar() {

    let id = localStorage.getItem("id");
    console.log(id);
    this.service.getPersonaId(Number(id))
    .subscribe(data=>{
      this.persona=data;
    })

  }
  Actualizar(persona: Persona) {
    if(this.myForm.valid) {
        Swal.fire({
      title: '¿Desea modificar los campos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'SI',
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //PONER EL CODIGO A EJECUTAR
        this.service.updatePersona(persona)
        .subscribe(data => {
          this.persona = data;
          Swal.fire({
            title: 'Cliente Modificado éxitosamente',
            icon: 'success',
            iconColor :'#17550c',
            color: "#0c3255",
            confirmButtonColor:"#0c3255",
            background: "#63B68B",
          })
          //alert("Se Actualiazo");
          this.router.navigate(['vendedor/crudCliente'])
        })
        //FIN DEL CODIGO A EJECUTAR
        //Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Ningun campo modificado', '', 'info')
      }
    })

} else {
      Swal.fire('Llene todos los campos', '', 'info')
    }

    
  }


}
