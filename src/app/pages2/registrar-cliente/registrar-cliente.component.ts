import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
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

  
  
  persona = new Persona();
 myForm:FormGroup;
  constructor(private router:Router, private service:PersonaService ,public fb:FormBuilder) { 
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
  }

  guardar(persona:Persona){

    if(this.myForm.valid){
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
        this.router.navigate(['vendedor/vendedor']);
      })
    } else{
      Swal.fire('Llene todos los campos', '', 'info')
    }

   
  }

  cancelar(){
    this.router.navigate(['vendedor/vendedor']);
  }

}
