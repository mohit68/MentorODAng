import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../services/technologies.service';
import { Router } from '@angular/router';
import { Technology } from '../model/technology';
import { NgForm } from '@angular/forms';
import { Skill } from '../model/skill';
import { AdminServiceService } from '../services/admin-service.service';
import { Trainers } from '../model/trainers';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  technology:Technology[];
  skill:Skill;
  trainers:Trainers[]

  constructor(private technologiesService:TechnologiesService,private router:Router,private adminServiceService:AdminServiceService) { }
  delete(id:number){
    console.log("in delete function"+id)
    this.adminServiceService.deleteTrainer(id).subscribe(result=>{
      if(result){
        console.log(result);
      }
      else{
        this.getTrainer();
      }
    });
  }

  ngOnInit() {
    this.getTechnologies();
    this.getTrainer();
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

  getTrainer(){
    console.log("hi......in admin..getting trainers");
        this.adminServiceService.getTrainer().subscribe( data => {
          this.trainers = data.body;
          console.log(">>>>>>>>>> users :: "+this.trainers.values);
        });
  }

}
