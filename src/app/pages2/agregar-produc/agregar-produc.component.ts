import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-agregar-produc',
  templateUrl: './agregar-produc.component.html',
  styleUrls: ['./agregar-produc.component.css']
})
export class AgregarProducComponent implements OnInit {
  result: any;
  closemessage={name:"Test User"}
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private Ref: MatDialogRef<AgregarProducComponent>) { }

  ngOnInit(): void {
    this.result = this.data;
  }
  
  Closepopup() {
    this.Ref.close("Closing from function");
  }

}
