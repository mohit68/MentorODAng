import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { SearchResult } from '../model/search-result'
import { SearchResultService } from '../services/search-result-service.service';
import { FormControl,FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {Router, ChildActivationEnd, ActivatedRoute} from "@angular/router"
import { Keyword } from '../model/keyword';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-training-results',
  templateUrl: './training-results.component.html',
  styleUrls: ['./training-results.component.css']
})
export class TrainingResultsComponent implements OnInit {

  SearchResult:any = [];

  searchKeyword:FormGroup;
  searchFrom: FormGroup;
  keyword:Keyword;
  key:string;

  constructor(private searchResultService:SearchResultService,private fb: FormBuilder,private router: Router,private route:ActivatedRoute) { }

  searchFrom1=new FormGroup({
    searchKeyword:new FormControl()
  })

 search(sf:NgForm):void{
  // this.keyword=sf.form.value.
  this.router.navigate(['/training-results/',sf.value.searchKeyword]);
  console.log(sf.value.searchKeyword+"hi......tyty.....")
  // this.searchResultService.getSearchResult(sf.form.value.searchKeyword).subscribe( data => {
  //   this.SearchResult = data.body;
  //   console.log(">>>>>>>>>> users :: "+this.SearchResult);
  // });
   
 }


  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.key=params.get('key');
      this.searchResultService.getSearchResult(this.key).subscribe( data => {
        this.SearchResult = data;
        console.log(">>>>>>>> in ngOnit  hello:: "+this.key);
      });
    });

    
    

    
  }

}
