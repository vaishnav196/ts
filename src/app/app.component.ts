import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { TableServiceService } from './table-service.service';
 import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { DataSource } from '@angular/cdk/collections';
export interface Data {
  id: number;
  title: string;
  userId: number;
  body: string;
  btn:string
  
}

const data: Data[] = [];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 ngOnInit(): void {
  this.data() 
 }
  constructor(private http:HttpClient,private tableService:TableServiceService,private dialog:MatDialog){}
  dataSource:any;

  displayedColumns: string[] = ['id', 'title', 'userId', 'body','btn'];
  tabledata:any;

  data(){
  // this.tableService.getData().subscribe((newdata)=>{
  //   this.dataSource=newdata;
  // });
  this.dataSource=JSON.parse(localStorage.getItem('fetchedData') || '{}')
  // console.log(this.dataSource);
 }

 selected=JSON.parse(localStorage.getItem('id') || '{}')

openPopUp(id:number){
console.log(id);
this.tableService.getUserById(id).subscribe((n)=>{
 localStorage.setItem('id',JSON.stringify(n))
 console.log(n)
 this.selected=n;
 console.log(this.selected)
 
})
  this.dialog.open(PopUpComponent,{
    width:"60%",
    height:"430px",
    data:{
      id:this.selected.id,
      name:this.selected.name,
      userId:this.selected.userId,
      body:this.selected.body
    }  
  })
}

updateData(){

}
}
