import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { AdmiComponent } from './pages/admi/admi.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AddComponent } from './pages/registro-producto/add/add.component';
import { EditarComponent } from './pages/registro-producto/editar/editar.component';
import { Pages2RoutingModule } from './pages2/pages2-routing.module';
import { VendedorComponent } from './pages2/vendedor/vendedor.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdmiComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'add', component: AddComponent},
  { path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    AuthRoutingModule,
    PagesRoutingModule,
    Pages2RoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent, AdmiComponent, VendedorComponent]
