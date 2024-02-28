import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService  {

  constructor(private http:HttpClient ) { }

private url="https://jsonplaceholder.typicode.com/posts"
  getData():Observable<any>{
    return this.http.get(`${this.url}`)

  }

  getlocalData(){
    let userdata=localStorage.getItem('localdata');
    return userdata;
  }
  getUserById(id:number):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}
