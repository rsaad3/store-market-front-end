import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //basic authentication
    // if(sessionStorage.getItem('username')&&sessionStorage.getItem('basicauth')){
    //   req = req.clone({
    //     setHeaders : {Authorization:sessionStorage.getItem('basicauth')}
    //   })
    // }

    if(sessionStorage.getItem('username')&&sessionStorage.getItem('token')){
      req = req.clone({
        setHeaders : {Authorization:sessionStorage.getItem('token')}
      })
    }
    return next.handle(req);
  }
}
