import { Component, OnInit } from '@angular/core';
import {SkillmasterService} from '../skillmaster.service';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkillMaster } from '../SkillMaster';


@Component({
  selector: 'app-updateskillmaster',
  templateUrl: './updateskillmaster.component.html',
  styleUrls: ['./updateskillmaster.component.css']
})
export class UpdateskillmasterComponent implements OnInit {

  constructor(private empskillmasterservice:SkillmasterService,private route: ActivatedRoute,  private location: Location) { }

  empskillmaster:SkillMaster;
  empid:number;

  ngOnInit() 
  {
    this.empid = +this.route.snapshot.paramMap.get('id');
    this.getMyEmployeeskillMaster(this.empid)
  }

  getMyEmployeeskillMaster(empid:number): void 
  {
    this.empskillmasterservice.getOneEmployeeSkills(empid).subscribe(skillmaster=>this.empskillmaster=skillmaster)
  }


  onUpdate(newempskillmaster:SkillMaster):void
  {
    this.empskillmasterservice.updateEmployee(newempskillmaster).subscribe(()=>this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  

}
