import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';

@Component({
  selector: 'app-crud-cliente',
  templateUrl: './crud-cliente.component.html',
  styleUrls: ['./crud-cliente.component.css']
})
export class CrudClienteComponent implements OnInit {

  //persona=new Persona;
  personas:Persona[]=[];
  
  constructor(private personaService:PersonaService,private router: Router) { }

  ngOnInit(): void {
    this.listarPerso();
  }

  nuevo(){
    this.router.navigate(['vendedor/regCliente']);
  }


  listarPerso(){

    this.personaService.listarPersona().subscribe(data=>{
      this.personas=data;
      console.log(this.personas);
      // this.filteredOptions = this.myControl.valueChanges.pipe(
      //   startWith(''),
      //   map(values=>this.filter(values)),
      // );
      // this.issloading=false;
    });
    //this.persona=this.personas[];
  }

  editar(personas:Persona):void{
    this.listarPerso();
    localStorage.setItem("id_persona",personas.id_persona.toString());
    console.log(personas.id_persona);
    this.router.navigate(['vendedor/editCliente']);
  }

  eliminar(persona:Persona):void{
    this.personaService.deletePersona(persona)
    .subscribe(data=>{
      this.personas = this.personas.filter(p=>p!==persona);
      alert("Se elimino");
    })
  }

}
