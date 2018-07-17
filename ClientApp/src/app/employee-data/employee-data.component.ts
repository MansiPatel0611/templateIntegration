import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  public employees: Array<Employee>;
  constructor(private _employeeservice: DataService, private route: ActivatedRoute, private router:Router) { }
  data: Employee;
  id: any;
  index: number;
  ngOnInit() {
     this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
    this._employeeservice.getEmployee(this.id).subscribe((data: any) => this.data = data);
   // this._employeeservice.getEmployees()
   /*   .subscribe(obj => {
        if (obj) {
          // Ensure that we have unique results in our imported data
          this.employees.push(_.uniqBy(obj, 'QID'));
        }
      });*/
    //.subscribe((data: any) => this.employees = data.data);
    //console.log(this.employees);
  }
}
