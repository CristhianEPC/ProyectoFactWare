import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { Producto } from 'src/app/modelo/Producto';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import { ProductoService } from 'src/app/servicios/api/producto.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  productos: Producto[] = [];
  
  personas: Persona[] = [];
  
filterPost = '';
  constructor(private service:ProductoService, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.service.getProducto()
    .subscribe(data=>{
      this.productos=data;
    })
    this.listarPerso();
  }
  listarPerso() {

    this.personaService.listarPersona().subscribe(data => {
      this.personas = data;
      console.log(this.personas);
    });

  }
}
