import { Injectable } from '@angular/core';
import { Trainers } from '../model/trainers';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

type EntityResponseType = HttpResponse<Trainers[]>;

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  getTrainer():Observable<EntityResponseType>{
    console.log("hello............... in service of admin...getting trainers");
     return this.http.get<Trainers[]>("http://localhost:8099/skillSet" ,{ observe: 'response' });
  }

  deleteTrainer(id:number){
    console.log("hello............... in service of admin"+id);
     return this.http.delete("http://localhost:8099/skillSet/delete/"+id);
  }

  constructor(private http:HttpClient,private router: Router) { }
}
