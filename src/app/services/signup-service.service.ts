import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Signup } from '../model/signup';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { environment } from 'src/environments/environment.prod';
import {map} from 'rxjs/operators';
import { SignupMentor } from '../model/signup-mentor';

type EntityResponseType = HttpResponse<Signup>;

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  constructor(private http:HttpClient,private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };

  save(signup:Signup){
    console.log(signup.password);
    this.http.post("http://localhost:8094/register", signup, this.httpOptions)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });  
    console.log("Done");
  }

  saveMen(signup:SignupMentor){
    console.log(signup.password);
    this.http.post("http://localhost:8094/register", signup, this.httpOptions)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });  
    console.log("Done");
  }

  login(username:string,password:string){
    console.log("here in login fun");
    return this.http.post<any>('http://localhost:8094/authenticate',{username:username,password:password}).pipe(map(result=>{
      if(result && result.token){
        console.log("in if")
        localStorage.setItem('CurrentUser',JSON.stringify(result.user));
        localStorage.setItem('JwtToken',(result.token));
        localStorage.setItem('role',(result.user.role));
      }
      if(result.user.role=="mentor"){
        this.router.navigate(["/mentor"]);
      }
    }))
  }

  logout(){
    localStorage.clear();
  }
}
