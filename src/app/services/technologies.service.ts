import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { Technology } from "../model/technology";
import{Skill} from '../model/skill';

// @Injectable({
//   providedIn: 'root'
// })
// export class TechnologiesService {

//   constructor() { }
// }

type EntityResponseType = HttpResponse<Technology[]>;

@Injectable({
  providedIn: 'root'
})

export class TechnologiesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };
  
  constructor(private http:HttpClient,private router: Router) {}

  getTechnology():Observable<EntityResponseType>{
    console.log("hello............... in service of technology");
     return this.http.get<Technology[]>("http://localhost:8097/skill" ,{ observe: 'response' });
  }

  deleteTechnology(id:number){
    console.log("hello............... in service of technology"+id);
     return this.http.delete("http://localhost:8097/skill/"+id);
  }

  
  addTechnology(skill:Skill){
    console.log("saving tech to db");
    this.http.post("http://localhost:8097/skill", skill, this.httpOptions)
    .subscribe(data => {
      // this.getTechnology();
     }, error => {
      console.log(error);
    });  
    console.log("Done");
  }
}
