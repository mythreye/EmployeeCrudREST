import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee'
import { DBService } from '../dbservice.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit
 {
  myemployees : Employee[];
  

  constructor(private dbservice:DBService) { }

  ngOnInit() {
    this.getMyEmployees();
  }

  getMyEmployees(): void {
  this.dbservice.getEmployee().subscribe(myemployees=>this.myemployees=myemployees);
  }

  onDelete(employee:Employee):void
  {
    this.myemployees=this.myemployees.filter(emp=>emp!==employee);
    this.dbservice.deleteEmployee(employee.employee_id).subscribe();
  }
}
