import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Employee } from 'src/employee';
import { EmployeeService } from '../employee.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {
  searchText: string = '';
  employee: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.getAllEmployee();
  }

  getAllEmployee(): void {
    this.employeeService.getAllEmployee().subscribe((res) => {
      if (res && Array.isArray(res) && res.length > 0) {
        this.employee = res;
      } else {
        this.employee = [];
      }
     });
  }

  onSearchInput(ev: any): void {
    this.employeeService.getSearchEmployee(ev.target.value).pipe(take(1)).subscribe((res) => {
      this.employee = res;
    });
  }

  deleteEmployee(id: any): void {
    this.employeeService.deleteEmployee(id).pipe(take(1)).subscribe((res) => {
      if (res) {
        alert("Employee Delete successfully");
        this.getAllEmployee();
      }
    });
  }

  updateEmployee(id: any): void {
    this.router.navigate(["/addEmployee"], {queryParams: {id: id}});
  }
}
