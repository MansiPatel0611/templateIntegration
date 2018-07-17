import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../Employee';


@Injectable()
export class DataService {
  baseUrl: string = '/api/employees';

  constructor(private http: HttpClient) {

  }

  getEmployees() {
    return this.http.get(this.baseUrl);
   // return this.http.get(this.baseUrl).subscribe(data => {
     // return data;
    //});
  }
  getEmployee(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }
  getEmployeeData(employee: Employee) {
    return this.http.post(this.baseUrl, employee);
  }
  remove(employee: Employee) {
    return this.http.delete(this.baseUrl + '/' + employee.id);
  }
  update(employee: Employee) {
    return this.http.put(this.baseUrl + '/' + employee.id, employee);
  }
}
