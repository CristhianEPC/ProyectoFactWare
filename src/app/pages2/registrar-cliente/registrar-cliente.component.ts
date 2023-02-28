import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import Swal from 'sweetalert2';

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
  
  persona = new Persona();

  constructor(private router:Router, private service:PersonaService) { }

  ngOnInit(): void {
  }

  guardar(persona:Persona){
    this.service.create(persona)
    .subscribe(data=>{
      Swal.fire({
        title: 'Cliente Guardado éxitosamente',
        icon: 'success',
        iconColor :'#17550c',
        color: "#0c3255",
        confirmButtonColor:"#0c3255",
        background: "#63B68B",
      })
      //alert("Se agrego con exito..!");
      this.router.navigate(['vendedor/crudCliente']);
    })
  }

}
