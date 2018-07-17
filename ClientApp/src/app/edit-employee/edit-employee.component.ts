import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: any;
  @Input() employees: Array<Employee>;
  constructor(private _employeeservice: DataService, private route: ActivatedRoute, private router: Router) {
  }
  data = new Employee();
  updateIndex: any;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this._employeeservice.getEmployees().subscribe((data: any) => this.employees = data);
    this._employeeservice.getEmployee(this.id).subscribe((data: any) => this.data = data);

  }
  on_cancel() {
    this.router.navigate(['/list']);
  }
  onSubmit() {
    for (var i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === this.data.id) {
        this.updateIndex = i;
        break;
      }
    }
    this._employeeservice.update(this.data).subscribe(
      result => this.employees.splice(this.updateIndex, 1, this.data)
    );
    this.router.navigate(['/list']);
  }
}
