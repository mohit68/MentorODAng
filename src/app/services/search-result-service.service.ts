import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { SearchResult } from '../model/search-result';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

type EntityResponseType = HttpResponse<SearchResult[]>;

const headerDict = {
  'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYUBkLmNvbSIsImV4cCI6MTU3MDI5NDMxNywiaWF0IjoxNTcwMjc2MzE3fQ.b3p32_X35yIfepZbNOoso1-2bOqzoJ5ul0MNN9-ev1pHk7vS_oJhDT78dV0RN49GRmVqVt1Jqrao3yxSllQvyQ'
}

const requestOptions = {                                                                                                                                                                                 
  headers: new Headers(headerDict), 
};
@Injectable({
  providedIn: 'root'
})

export class SearchResultService {

  

  constructor(private http:HttpClient,private router: Router) {}

  getSearchResult(keyword: string){
    console.log("hello............... in service"+keyword);
     return this.http.get("http://localhost:8094/search/"+keyword);
  }
}
