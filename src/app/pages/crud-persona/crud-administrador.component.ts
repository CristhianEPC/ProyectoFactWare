import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';

@Component({
  selector: 'app-crud-administrador',
  templateUrl: './crud-administrador.component.html',
  styleUrls: ['./crud-administrador.component.css']
})
export class CrudAdministradorComponent implements OnInit {

  personas: Persona[] = [];
  
  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.listarPerso();
  }

  nuevo() {
    this.router.navigate(['admin/regisAdmin']);
  }

  listarPerso() {

    this.personaService.listarPersona().subscribe(data => {
      this.personas = data;
      console.log(this.personas);
    });

  }

  editar(perso: Persona): void {
    this.listarPerso();
    localStorage.setItem("id", perso.id_persona.toString());
    console.log(perso.id_persona);
    this.router.navigate(['admin/editPerso']);
  }

  eliminar(pers: Persona): void {
    if (confirm('¿Seguro deseas eliminar este Persona?')) {
      this.personaService.deletePersona(pers)
        .subscribe(data => {
          this.personas = this.personas.filter(p => p !== pers);
          alert("Se elimino");
        });
    }

  }

}
