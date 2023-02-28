import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component'
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { Pages2Module } from './pages2/pages2.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';


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
    Pages2Module,
    BrowserAnimationsModule,
    MatSnackBarModule
   
     
  
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
