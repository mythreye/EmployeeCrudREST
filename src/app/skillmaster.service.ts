import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {SkillMaster} from './SkillMaster'

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({providedIn: 'root'})

export class SkillmasterService {

  private restServiceUrl = 'http://localhost:8080/SkillMapperRest/api/skillmaster';

  constructor(private http: HttpClient) { }


  getOneEmployeeSkills(id:number): Observable<SkillMaster> 
  {
    const url=`${this.restServiceUrl}/${id}`;
    return this.http.get<SkillMaster>(url);
  }


  addEmployeeSkill(skillmaster:SkillMaster):Observable<void>
  {
    
    return this.http.post<void>(this.restServiceUrl, skillmaster, httpOptions);
  }

  updateEmployee(skillmaster:SkillMaster) : Observable<void>
  {
    
    return this.http.put<void>(this.restServiceUrl, skillmaster, httpOptions);
  }
}
