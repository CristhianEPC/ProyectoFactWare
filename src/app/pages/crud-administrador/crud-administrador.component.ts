import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import Swal from 'sweetalert2';

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
          Swal.fire(
            'Borrado!',
                'Su archivo ha sido borrado.',
                'success'
          )
          // Swal.fire({
          //   title: 'Persona Eliminado éxitosamente',
          //   icon: 'success',
          //   iconColor :'#17550c',
          //   color: "#0c3255",
          //   confirmButtonColor:"#0c3255",
          //   background: "#63B68B",
          // })
          //alert("Se elimino");
        });
        //FIN DEL CODIGO A EJECUTAR
        
      }
    })

  }

}
