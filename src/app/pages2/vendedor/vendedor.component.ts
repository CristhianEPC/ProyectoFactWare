import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { Producto } from 'src/app/modelo/Producto';
import { PersonaService } from 'src/app/servicios/api/persona.service';
import { ProductoService } from 'src/app/servicios/api/producto.service';
import { MatDialog } from '@angular/material/dialog';

import { FormControl , FormBuilder , FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { AgregarProducComponent } from '../agregar-produc/agregar-produc.component';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  productos: Producto[] = [];
  
  personas: Persona[] = [];

filterPost = '';
filterPost2 = '';

  constructor(private service:ProductoService, private personaService: PersonaService, private router: Router,  private matdialog: MatDialog) {  
  
  
  }

  ngOnInit(): void {

    this.service.getProducto()
    .subscribe(data=>{
      this.productos=data;
     console.log(this.productos);
      
    })
    this.listarPerso();









   /*
    this.Finaldata = this.control.valueChanges.pipe(
      startWith(''),
      map(item => {
        const name = item;
        return name ? this._filter(name as string) : this.options
          console.log(this.Finaldata)
      })
    )
*/

  }

 
/*
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }*/


  /*
  SelectCustomer(name: any) {
    console.log(name);
  }

 
  private _filter(name: string): Persona[] {
    const filtervalue = name.toLocaleLowerCase();
    return this.options.filter(opt => opt.nombre_persona.toLocaleLowerCase().includes(filtervalue));
  }


*/


  OpenPopup() {
    const popup= this.matdialog.open(AgregarProducComponent,{
      width:'60%',height:'420px',

     data:{
       name:"Techiees",
       type:'Tech'
     }
   });
   popup.afterClosed().subscribe(item=>{
 console.log(item);
   });
   }




  listarPerso() {

    this.personaService.listarPersona().subscribe(data => {
      this.personas = data;
    });

  }

  
  Agregar() {
    this.router.navigate(['vendedor/regCliente']);
  }
  
}
