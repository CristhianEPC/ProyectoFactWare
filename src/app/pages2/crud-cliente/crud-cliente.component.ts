import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-cliente',
  templateUrl: './crud-cliente.component.html',
  styleUrls: ['./crud-cliente.component.css']
})
export class CrudClienteComponent implements OnInit {

  //persona=new Persona;
  personas: Persona[] = [];

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.listarPerso();
  }

  nuevo() {
    this.router.navigate(['vendedor/regCliente']);
  }


  listarPerso() {

    this.personaService.listarPersona().subscribe(data => {
      this.personas = data;
      console.log(this.personas);
      // this.filteredOptions = this.myControl.valueChanges.pipe(
      //   startWith(''),
      //   map(values=>this.filter(values)),
      // );
      // this.issloading=false;
    });

  }

  editar(perso: Persona): void {
    this.listarPerso();
    localStorage.setItem("id", perso.id_persona.toString());
    console.log(perso.id_persona);
    this.router.navigate(['vendedor/editCliente']);
  }

  eliminar(pers: Persona): void {

    Swal.fire({
      title: '¿Esta Seguro?',
      text: "No será capaz de revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        //COLOCAR EL CODIGO A EJECUTAR
        this.personaService.deletePersona(pers)
        .subscribe(data => {
          this.personas = this.personas.filter(p => p !== pers);
        });
        //FIN DEL CODIGO A EJECUTAR
        Swal.fire(
          'Borrado!',
          'Su archivo ha sido borrado.',
          'success'
        )
      }
    })

  }

}
