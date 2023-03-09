import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {

  persona = new Persona();
  myForm:FormGroup;
  constructor(private router:Router, private service:PersonaService , public fb:FormBuilder) { 
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
    if (this.myForm.valid){
    this.service.create(persona)
    .subscribe(data=>{
      Swal.fire({
        title: 'Persona Guardado éxitosamente',
        icon: 'success',
        iconColor :'#17550c',
        color: "#0c3255",
        confirmButtonColor:"#0c3255",
        background: "#63B68B",
      })
      //alert("Se agrego con exito..!");
      this.router.navigate(['admin/crudAdmin']);
    })
  }else{
    alert('Revise que los campos esten llenados correctamente')
  }
  
  }

}
