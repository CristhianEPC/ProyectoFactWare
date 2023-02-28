import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';

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
    this.service.updatePersona(persona)
      .subscribe(data => {
        this.persona = data;
        alert("Se Actualiazo");
        this.router.navigate(['admin/crudAdmin'])
      })
  }

}
