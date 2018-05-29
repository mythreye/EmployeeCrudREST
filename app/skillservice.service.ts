import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Skill } from './Skill';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({ providedIn: 'root' })
export class skillservice {

  private restServiceUrl = 'http://localhost:8080/SkillMapperRest/api/skill';

  constructor(private http: HttpClient) { }

  getOneEmployeeSkills(id:number): Observable<Skill[]> 
  {
    const url=`${this.restServiceUrl}/${id}`;
    return this.http.get<Skill[]>(url);
  }
  addEmployeeSkill(skill:Skill):Observable<void>
  {
    alert(skill.employeeid);
    return this.http.post<void>(this.restServiceUrl, skill, httpOptions);
  }
}  