import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DataService } from './services/data.service';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { CapitalizePipe } from './services/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EmployeeListComponent,
    EmployeeDataComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', component: WelcomeComponent },
      { path: 'list', component: EmployeeListComponent }
    ]),
    RouterModule.forChild([
      { path: 'view/:id', component: EmployeeDataComponent },
      { path: 'edit/:id', component: EditEmployeeComponent },
      { path: 'add', component: AddEmployeeComponent }])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
