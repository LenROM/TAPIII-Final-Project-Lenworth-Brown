import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../app-services/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit{
  
  salaryObj: any = {
    "salaryId": 0,
    "employeeId": 0,
    "salaryDate": "2023-07-08T08:12:46.197Z",
    "presentDays": 0,
    "salaryAmount": 0
    }

    salaryArray: any [] = [];
    employeeArray: any[]=[];
    constructor(private empSrv: EmployeeService, private http: HttpClient){

    }
      ngOnInit(): void {
        this.getAllSalary();
    this.loadAllEmp();
      }


      loadAllEmp(){
        this.empSrv.getAllEmployee().subscribe((res:any)=>{
          this.employeeArray = res.data;
        })
      }
    
    getAllSalary(){
      this.http.get('').subscribe((res:any)=>{
    
      })
    }
    
    onSave(){
    
    }
    
    onUpdate(){
    
    }
    
    onEdit(id:number){
    
    }
    
    onDelete(id:number){
    
    }



}
