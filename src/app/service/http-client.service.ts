import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {
    // let username=sessionStorage.getItem('username');
    // let password=sessionStorage.getItem('passWord');
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // headers.set('Access-Control-Allow-Origin', '*');
    // console.log("test call");
    return this.httpClient.get<Employee[]>(environment.devUrl+'/employees');
  }

  public deleteEmployee(employee) {
    // let username=sessionStorage.getItem('username');
    // let password=sessionStorage.getItem('passWord');
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // headers.set('Access-Control-Allow-Origin', '*');
    return this.httpClient.delete<Employee>(environment.devUrl+"/employees" + "/" + employee.empId);
  }

  public createEmployee(employee) {
    // let username=sessionStorage.getItem('username');
    // let password=sessionStorage.getItem('passWord');
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // headers.set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post<Employee>(environment.devUrl+"/employees", employee);
  }
}
