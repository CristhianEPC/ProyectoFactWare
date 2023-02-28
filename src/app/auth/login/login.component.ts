import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../../servicios/api/api.service'
import { Router } from '@angular/router'
import { LoginUsuario } from 'src/app/modelo/login';
import { Usuario } from 'src/app/modelo/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  json = "";
  login = new LoginUsuario();
  usuar = new Usuario();

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  iRol: number | undefined;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  public onLogin(): void {

    if (this.login.user.trim() == '' || this.login.user.trim() == null) {
      // this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
      //   duration: 3000
      // })
      //alert("campo de usuario vacio");
      Swal.fire({
        title: 'Campo de usuario esta vacio',
        icon: 'warning',
        iconColor :'#0a0a0a', //color negro
        color: "#9e0e0e", //color rojo
        confirmButtonColor:"#0c3255", //color azul
        background: "#baba20", //color blanco
      })
      console.log("campo de usuario vacio")
      return;
    }

    if (this.login.password.trim() == '' || this.login.password.trim() == null) {
      // this.snack.open('La contraseña es requerida !!', 'Aceptar', {
      //   duration: 3000
      // })
      //alert("campo la clave vacio");
      Swal.fire({
        title: 'Campo de contraseña esta vacio',
        icon: 'warning',
        iconColor :'#0a0a0a', //color negro
        color: "#9e0e0e", //color rojo
        confirmButtonColor:"#0c3255", //color azul
        background: "#baba20", //color blanco
      })
      console.log("campo de contraeña vacio")
      return;
    }

    this.api.getCurrentUser(this.login)
      .subscribe((data) => {
        //console.log(data.toString + " primero");
        //this.json = data.toString();
        //console.log(this.json + " segundo");
        this.json = JSON.stringify(data);
        console.log(this.json + " tercero");
        this.usuar = JSON.parse(this.json);
        console.log(this.usuar + " cuarto");


        if (this.usuar != null) {
          this.iRol = this.usuar.rol?.id_rol;
          console.log(this.iRol + " quinto");
          if (this.iRol == 1) {
            this.router.navigate(['admin']);
            console.log("administrador");
          } 
          else if(this.iRol == 2){
            this.router.navigate(['vendedor/vendedor']);
            console.log("vendedor");
          }
          else {
            Swal.fire({
              title: 'No esta asignado un Rol',
              icon: 'success',
              iconColor :'#b83e1f',
              color: "#0c3255",
              confirmButtonColor:"#0c3255",
              background: "#b0b01e",
            })
          }
        } else {
          Swal.fire({
            title: 'Datos Incorrectos',
            icon: 'error',
            iconColor :'#0a0a0a', //color negro
            color: "#9e0e0e", //color rojo
            confirmButtonColor:"#0c3255", //color azul
            background: "#fcfcfc", //color blanco
          })
        }


      });

  }

}
