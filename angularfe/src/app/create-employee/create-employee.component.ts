import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../_services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router){
    
  }
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  ngOnInit(): void{
  }
  
  saveEmployee(){
    this.employeeService.CreateEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.gotoEmployeeList();
    }),
    console.error();
    
  }
  gotoEmployeeList(){
    this.router.navigate(['/admin']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee()
  }
}

