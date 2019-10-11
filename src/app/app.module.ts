import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MentorComponent } from './mentor/mentor.component';
import { TrainingResultsComponent } from './training-results/training-results.component';
import { SearchResultService } from './services/search-result-service.service';
import { SignupServiceService } from './services/signup-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { JwtInterceptor } from './services/jwt-interceptor.service';



const routes:Routes = [ // added new
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'mentor', component:MentorComponent},
  {path:'training-results/:key', component:TrainingResultsComponent},
  // {path:'training-results', component:TrainingResultsComponent},
  {path:'**', redirectTo:'login'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    MentorComponent,
    TrainingResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [SearchResultService,SignupServiceService,
    { provide:HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
