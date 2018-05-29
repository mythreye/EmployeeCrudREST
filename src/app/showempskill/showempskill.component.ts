import { Component, OnInit } from '@angular/core';
import { skillservice } from '../skillservice.service';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Skill } from '../Skill';

@Component({
  selector: 'app-showempskill',
  templateUrl: './showempskill.component.html',
  styleUrls: ['./showempskill.component.css']
})
export class ShowempskillComponent implements OnInit 
{
  empskill:Skill[];
  empid:number;
 constructor(private empskillservice:skillservice,private route: ActivatedRoute,  private location: Location) { }

  ngOnInit() 
  {
    this.getMyEmployeeskill();
  }
  
  getMyEmployeeskill(): void 
  {
    this.empid = +this.route.snapshot.paramMap.get('id');
    this.empskillservice.getOneEmployeeSkills(this.empid).subscribe(empskills=>this.empskill=empskills);
  }
}
