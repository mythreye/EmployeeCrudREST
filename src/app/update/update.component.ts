import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DBService } from '../dbservice.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Employee } from '../Employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  myemployee:Employee;

  constructor(private dbservice:DBService,  private route: ActivatedRoute,  private location: Location) 
  { }

  ngOnInit() 
  {
    this.getOnemployees();
  }

  getOnemployees(): void 
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dbservice.getOneEmployee(id).subscribe(employee=>this.myemployee=employee);
  }

  onUpdate(employee:Employee):void
  {
    this.dbservice.updateEmployee(employee).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}