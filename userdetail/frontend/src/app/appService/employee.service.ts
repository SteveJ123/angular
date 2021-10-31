import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../appModels/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:3000/employees";

  constructor(private http:HttpClient) { }

  addEmployee(obj:Employee){
    return this.http.post(this.url, obj);
  }

  getEmployeeList(){
    return this.http.get(this.url);
  }

  deleteEmployee(id){
    return this.http.delete(`${this.url}/${id}`);
  }

  updateEmployee(obj:Employee, id){
    return this.http.put(`${this.url}/${id}`, obj);
  }
}
