import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from './Employee';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({ providedIn: 'root' })
export class DBService {

  private restServiceUrl = 'http://localhost:8080/SkillMapperRest/api/employee';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.restServiceUrl);
  }

  getOneEmployee(id:number): Observable<Employee> 
  {
    const url=`${this.restServiceUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  deleteEmployee(id:number): Observable<Employee> {
    
    const url = `${this.restServiceUrl}/${id}`;
    return this.http.delete<Employee>(url, httpOptions);
  }
  
  updateEmployee(employee:Employee) : Observable<void>
  {
    
    return this.http.put<void>(this.restServiceUrl, employee, httpOptions);
  }

  addEmployee(employee:Employee):Observable<void>
  {
    return this.http.post<void>(this.restServiceUrl, employee, httpOptions);
  }
}  