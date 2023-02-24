import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component'
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { Pages2Module } from './pages2/pages2.module';
import{ApiService}from '../app/servicios/api/api.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    AuthModule,
    PagesModule,
    Pages2Module
  ],
  providers: [ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
