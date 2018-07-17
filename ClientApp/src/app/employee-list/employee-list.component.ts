import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Employee } from '../Employee';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: Array<Employee>;
  //employees: any;
  constructor(private dataservice: DataService, private router: Router, private route: ActivatedRoute) { }

  deleteEmp(data) {
    //console.log(this.employees);
    //console.log(data);
    if (confirm(`Really delete the employee:?`)) {
      var deleteIndex;
      for (var i = 0; i < this.employees.length; i++) {
        if (this.employees[i].id === data.id) {
          deleteIndex = i;
          break;
        }
      }
    }
    //console.log(deleteIndex);
    this.dataservice.remove(data).subscribe(
      result => this.employees.splice(deleteIndex, 1)
    );

    this.router.navigate(['/list']);
  }
  position(index) {
    console.log(index);
  }
  ngOnInit() {
    this.dataservice.getEmployees().subscribe((data:any) => this.employees=data);
    //this.employees = this.dataservice.getEmployees();
    console.log(this.dataservice.getEmployees());
      }
}
