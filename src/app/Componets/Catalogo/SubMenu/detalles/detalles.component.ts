import { Component, OnInit, Inject,ViewChild } from '@angular/core';
import {MatDialogModule,MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{
  public title: string = "";
  public sqlsubMen:any;
  public sqlrelsubmenucontroller:any;

  constructor( public dialogRef: MatDialogRef<DetallesComponent>,   
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.title = this.data.titulo;
    this.sqlsubMen =this.data.sqlsubMen;
    this.sqlrelsubmenucontroller =this.data.sqlrelsubmenucontroller;

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
