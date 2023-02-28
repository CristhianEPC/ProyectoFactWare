import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {

  persona = new Persona();
  
  constructor(private router:Router, private service:PersonaService) { }

  ngOnInit(): void {
  }

  guardar(persona:Persona){
    this.service.create(persona)
    .subscribe(data=>{
      alert("Se agrego con exito..!");
      this.router.navigate(['admin/crudAdmin']);
    })
  }

}
