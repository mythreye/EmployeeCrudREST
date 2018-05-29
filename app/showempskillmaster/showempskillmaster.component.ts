import { Component, OnInit } from '@angular/core';
import {SkillmasterService} from '../skillmaster.service';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkillMaster } from '../SkillMaster';

@Component({
  selector: 'app-showempskillmaster',
  templateUrl: './showempskillmaster.component.html',
  styleUrls: ['./showempskillmaster.component.css']
})
export class ShowempskillmasterComponent implements OnInit {

  empskillmaster:SkillMaster;
  empid:number;

  constructor(private empskillmasterservice:SkillmasterService,private route: ActivatedRoute,  private location: Location) { }

  ngOnInit() 
  {
    this.empid = +this.route.snapshot.paramMap.get('id');
    this.getMyEmployeeskillMaster(this.empid)
  }

  getMyEmployeeskillMaster(empid:number): void 
  {
    this.empskillmasterservice.getOneEmployeeSkills(empid).subscribe(skillmaster=>this.empskillmaster=skillmaster)
  }

}
