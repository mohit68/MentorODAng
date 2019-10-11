import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
        let jwt_token = localStorage.getItem('JwtToken');
        if (currentUser && jwt_token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${jwt_token}`
                }
            });
        }
        return next.handle(request);
    }
    
}