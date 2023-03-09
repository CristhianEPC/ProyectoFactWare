import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {

  persona = new Persona();

  constructor(private router: Router, private service: PersonaService) { }

  ngOnInit(): void {
  }

  guardar(persona: Persona) {

    if (persona.cedula != "" && persona.nombre_persona != ""
      && persona.apellido_persona != "" && persona.direccion_persona != ""
      && persona.telefono_persona != "" && persona.correo_persona != "") {

      this.service.create(persona)
        .subscribe(data => {
          Swal.fire({
            title: 'Persona Guardado éxitosamente',
            icon: 'success',
            iconColor: '#17550c',
            color: "#0c3255",
            confirmButtonColor: "#0c3255",
            background: "#63B68B",
          })
          //alert("Se agrego con exito..!");
          this.router.navigate(['admin/crudAdmin']);
        })

    } else {
      Swal.fire('Llene todos los campos', '', 'info')
    }


  }

}
