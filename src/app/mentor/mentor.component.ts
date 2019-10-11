import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../services/technologies.service';
import { Technology } from '../model/technology';
import { NgForm,FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import {Skill} from '../model/skill';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  technology:Technology[];
  myGroup: FormGroup;
  skill:Skill;

  constructor(private technologiesService:TechnologiesService,private router:Router) { }



  delete(id:number){
    console.log("in delete function"+id)
    this.technologiesService.deleteTechnology(id).subscribe(result=>{
      if(result){
        console.log(result);
      }
      else{
        this.getTechnologies();
      }
    });
    // window.location.reload();
    // this.getTechnologies();
    // this.router.navigate(["/mentor"]);
  }
  
  ngOnInit() {

    this.getTechnologies();
      // console.log("hi......in technology mentor component");
      // this.technologiesService.getTechnology().subscribe( data => {
      //   this.technology = data.body;
      //   console.log(">>>>>>>>>> users :: "+this.technology);
      // });
  
}
  search():void{
    // this.keyword=sf.form.value.

}
getTechnologies(){
  console.log("hi......in technology mentor component");
      this.technologiesService.getTechnology().subscribe( data => {
        this.technology = data.body;
        console.log(">>>>>>>>>> users :: "+this.technology);
      });
}
addSkill(as:NgForm){
  console.log("in mentor add skill"+as.value.toc+as.value.prerequisites);
  this.skill={
    name:as.value.skill,toc:as.value.toc,prerequisites:as.value.prerequisites
  }
  this.technologiesService.addTechnology(this.skill);
  this.getTechnologies();
}
}