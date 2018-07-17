import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() employees: Array<Employee>;
  constructor(private _data: DataService, private router: Router) { }
  data = new Employee();
  public qualification: Array<any>;
  ngOnInit() {
    this.qualification = ['Developer', 'Web Designer', 'Consultant', 'Manager', 'Other'];
  }
  onSubmit() {
    this._data.getEmployeeData(this.data).
      subscribe((data: any) => this.employees.push(data));
    //subscribe();
    //employees => this.employees.push(this._data));
    this.router.navigate(['/list']);
  }
  on_cancel() {
    this.router.navigate(['/list']);
  }

}
