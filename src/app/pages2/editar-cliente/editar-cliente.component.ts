import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

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

    // if (id != null) {
    //   this.service.getPersonaId(+id)
    //     .subscribe(data => {
    //       console.log(data);
    //       this.persona = data;
    //     })
    // }

  }

  Actualizar(persona: Persona) {
    this.service.updatePersona(persona)
      .subscribe(data => {
        this.persona = data;
        alert("Se Actualiazo");
        this.router.navigate(['vendedor/crudCliente'])
      })
  }

}
