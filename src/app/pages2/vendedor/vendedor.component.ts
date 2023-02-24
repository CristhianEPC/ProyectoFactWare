import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  var: String = "";
  
  constructor(private apiSer:ApiService,private router: Router) { }

  ngOnInit(): void {
  }

  haceClic() {
    this.var = "soy un cliente";
    console.log(this.var);
  }

  crearPerson() {
    this.router.navigateByUrl('vendedor/regCliente');
  }

}
