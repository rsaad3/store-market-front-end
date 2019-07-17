import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export class User {
  constructor(
    public status: string,
  ) { }

}

export class JwtResponse {
  constructor(public jwttoken: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }




  authenticate(username, password) {
    //basic authentication
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.httpClient.get<User>('http://localhost:8080/employees/validateLogin', { headers }).pipe(
    //   map(
    //     userData => {
    //       sessionStorage.setItem('username', username);
    //       let authString = 'Basic ' + btoa(username + ':' + password);
    //       sessionStorage.setItem('basicauth', authString);
    //       sessionStorage.setItem('password', password);
    //       return userData;
    //     }
    //   )

    // );

    return this.httpClient.post<any>(environment.devUrl+ '/authenticate', { username, password }).pipe(
      map(userData => {
        sessionStorage.setItem('username', username);
        let tokenStr = 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
      })
    );
  }


  isUserLogedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);

  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
