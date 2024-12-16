import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8080/api/emp';

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/employees');
  }

  addEmployee(body: any): Observable<Employee> {
    return this.http.post<Employee>(this.url + '/addEmployee', body);
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/delete/'+id, {responseType: 'text' as 'json'});
  }

  updateEmployee(body: any, id: any): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/updateEmployee/'+ id, body);
  }

  getSearchEmployee(text: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/search?searchText='+ text);
  }

  getEmployeeById(id: any): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/employee/'+id);
  }

  getEmployeeByUserPassword(userEmail: string, userPassword: string): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/employeeLogin/'+userEmail + '/'+ userPassword);
  }
}
