import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { Location } from '@angular/common';
import { DBService } from '../dbservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private dbservice:DBService,  private route: ActivatedRoute,  private location: Location) { }

  ngOnInit() 
  {
    this.dbservice.getEmployee().subscribe(myemployees=>this.emparray=myemployees);
  }

  emparray:Employee[];
  newemployee:Employee;


  onInsert(employee_id,employee_name,email_id,gender,phno,address,birth_date,joining_date,role):void
  {
    this.newemployee=new Employee();
    this.newemployee.employee_id=employee_id;
    this.newemployee.employee_name=employee_name;
    this.newemployee.email_id=email_id;
    this.newemployee.phno=phno;
    this.newemployee.address=address;
    this.newemployee.birth_date=birth_date;
    this.newemployee.joining_date=joining_date;
    this.newemployee.role=role;
    this.newemployee.gender=gender
    this.newemployee.EPassword="login@123"
    this.dbservice.addEmployee(this.newemployee).subscribe();
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
