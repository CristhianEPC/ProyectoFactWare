import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  // personForm = new FormGroup({
  //   cedula: new FormControl('', Validators.required),
  //   nombre: new FormControl('', Validators.required),
  //   apellido: new FormControl('', Validators.required),
  //   direccion: new FormControl('', Validators.required),
  //   telefono: new FormControl('', Validators.required),
  //   correo: new FormControl('', Validators.required),
  // });
  
  persona = new Persona;

  constructor(private router:Router, private service:PersonaService) { }

  ngOnInit(): void {
  }

  guardar(persona:Persona){
    this.service.create(persona)
    .subscribe(data=>{
      alert("Se agrego con exito..!");
      this.router.navigate(['vendedor/crudCliente']);
    })
  }

}
