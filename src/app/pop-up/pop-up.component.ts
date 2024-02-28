import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { TableServiceService } from '../table-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface DialogData {
   id: number;
  title: string;
  userId: number;
  body: string;
}
export interface Data {
  id: number;
  title: string;
  userId: number;
  body: string;

  
}

const data: Data[] = [];
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  ngOnInit(): void {
    // this.data() 
   }

   dataSource =JSON.parse(localStorage.getItem('id') || '{}') ;
    displayedColumns: string[] = ['id', 'title', 'userId', 'body'];
 data:Data[]=[]
 myform: FormGroup;

   constructor(private http:HttpClient,private tableService:TableServiceService,private dialog:MatDialog,private fb:FormBuilder){
    this.myform=this.fb.group({
      id:this.fb.control(''),
      name:this.fb.control(''),
      userId:this.fb.control(''),
      body:this.fb.control('')
    })
   }


// data=JSON.parse(localStorage.getItem('fetchedData') || '{}')
//  data(){
//   // this.tableService.getData().subscribe((newdata)=>{
//   //  this.dataSource=newdata;
//   // });

//   this.dataSource=JSON.parse(localStorage.getItem('fetchedData') || '{}')
//   console.log(this.dataSource);
//  }
// saveData(){
// }

selected=JSON.parse(localStorage.getItem('id') || '{}')

openPopUp(id:number){
  console.log(id);
  this.tableService.getUserById(id).subscribe((n)=>{
   localStorage.setItem('id',JSON.stringify(n))
   console.log(n)
   this.selected=n; 
  })


 this.dialog.open(PopUpComponent,{
      width:"60%",
      height:"430px",
      data:{
        id:this.myform.setValue(this.selected.id),
        name:this.myform.setValue(this.selected.name),
        userId:this.myform.setValue(this.selected.userId),
        body:this.myform.setValue(this.selected.body)
      }  
    })
  }
  
 updateData(){

 }

}
