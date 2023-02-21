import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar2Service } from 'src/app/servicios/api/sidebar2.service';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

  menuItems2?:any[];

  constructor(private sidebar2Service : Sidebar2Service, private router : Router) { 
    this.menuItems2 = this.sidebar2Service.menu2;
  }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
