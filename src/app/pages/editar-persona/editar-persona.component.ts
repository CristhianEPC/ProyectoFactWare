import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  persona:Persona = new Persona();
  
  constructor(private router: Router, private service: PersonaService) { }

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
    if(persona.nombre_persona!= "" && persona.apellido_persona !="" && persona.direccion_persona!="" && persona.telefono_persona!=""
    && persona.correo_persona !="" ){
    this.service.updatePersona(persona)
      .subscribe(data => {
        this.persona = data;
        Swal.fire({
          title: 'Persona Modificada éxitosamente',
          icon: 'success',
          iconColor :'#17550c',
          color: "#0c3255",
          confirmButtonColor:"#0c3255",
          background: "#63B68B",
        })
        //alert("Se Actualiazo");
        this.router.navigate(['admin/crudAdmin'])
      })
    }else{
      Swal.fire({
        title: 'Revise  por favor,existen campos vacios',
        icon: 'error',
        iconColor :'#17550c',
        color: "#0c3255",
        confirmButtonColor:"#0c3255",
        background: "#63B68B",
      })
    }
  }

}
