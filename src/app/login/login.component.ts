import { Component, OnInit ,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchResult } from '../model/search-result'
import { SearchResultService } from '../services/search-result-service.service';
import { FormControl,FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Keyword } from '../model/keyword';
import { Signup } from '../model/signup';
import { SignupServiceService } from '../services/signup-service.service';
import { TrainingResultsComponent } from '../training-results/training-results.component';
import { stringify } from '@angular/compiler/src/util';
import { SignupMentor } from '../model/signup-mentor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  constructor(private searchResultService:SearchResultService,private fb: FormBuilder,private router: Router,private route: ActivatedRoute,private signupServiceService:SignupServiceService) { }

  searchFrom1=new FormGroup({
    searchKeyword:new FormControl()
  })

  SearchResult:SearchResult[];
  signupUser:Signup;
  signupMen:SignupMentor;
  searchKeyword:FormGroup;
  searchFrom: FormGroup;
   keyword:Keyword;
  key:string;
  username:string;
  aaname:string;

  search(sf:NgForm):void{
    this.key=sf.value.searchKeyword;
    console.log("here in login"+this.key)
    this.router.navigate(['/training-results/',this.key]);
   }
  
   signup(sign:NgForm):void{
     this.aaname=sign.value.username;
     console.log("username "+this.aaname);
    this.signupUser = 
      {username:sign.value.username,password:sign.value.password,firstName:sign.value.firstname,
        lastName:sign.value.lastname,contactNumber:sign.value.contactno,
        role:"student",linkedinUrl:sign.value.linkedURL
        };

  this.signupServiceService.save(this.signupUser);
    console.log("here in signup 4r4r "+this.signupUser.firstName);
    console.log("here in signup  "+this.signupUser.password);
   }

   login(login:NgForm){
    console.log("helii doing login...."+login.value.username+login.value.password);
    this.signupServiceService.login(login.value.username,login.value.password).subscribe(res=>{
    });
    console.log(localStorage.getItem('CurrentUser'));
    
  }

  signupMentor(signMen:NgForm):void{
    signMen.value.role="mentor";
    console.log(signMen.value.username);
    console.log(signMen.value.password);
    console.log(signMen.value.firstname);
    console.log(signMen.value.lastname);
    console.log(signMen.value.username);
    console.log(signMen.value.contactno);
    console.log(signMen.value.linkedURL);
    console.log(signMen.value.role);
    console.log(signMen.value.experienceyrs);
    console.log(signMen.value.skills);
   this.signupMen = 
     {username:signMen.value.username,password:signMen.value.password,firstName:signMen.value.firstname,
       lastName:signMen.value.lastname,contactNumber:signMen.value.contactno,
       role:"mentor",linkedinUrl:signMen.value.linkedURL,experienceyrs:signMen.value.experienceyrs,skills:signMen.value.skills
       };
       this.signupServiceService.saveMen(this.signupMen);
  }

  ngOnInit() {

  }

}
