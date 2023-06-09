import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../_services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService, private router:Router){

  }
  ngOnInit(): void {
      this.getEmployees();
      
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }
  
  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]);

  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();
    })
  }
}
