import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/app-services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  employeeArray: any[] = [];
  employeeObj: any;
  router: any;
  id: any
  employees: any;

constructor(private empSrv: EmployeeService, private routing: Router){
  this.resetObj();
}

  ngOnInit(): void {
    this.loadAllEmployee();
  }

  resetObj(){
    this.employeeObj = {
      "empId": 0,
    "empName": "",
    "empContactNo": "",
    "empEmail": "",
    "address": "",
    "bankName": "",
    "accountNo": "",
    "bankBranch":"",
    "salary": 0
    }
  } 

  loadAllEmployee(){
    this.empSrv.getAllEmployee().subscribe((res:any)=>{
      this.employeeArray = res["data"];
    })
  }

  onSave(){
    this.empSrv.createEmployee(this.employeeObj).subscribe((res:any)=>{
      
      if(res.results){
        this.loadAllEmployee();
        console.log(res.message)
        // this.resetObj();
        
        // window.location.reload();
      }else{
        console.log(res.message)
      }
      
    });
  }

  onEdit(id:number){
    this.empSrv.getEmpById(id).subscribe((res: any)=>{
      this.employeeObj = res.data.employee[0];
      console.log(`employeeObj >>${JSON.stringify(this.employeeObj)}`)
    });
  }


  onUpdate(id:number){
    this.empSrv.updateEmployee(this.employeeObj, id).subscribe((res:any)=>{
        
        console.log(res);
        this.loadAllEmployee();
        this.resetObj()
      
    });
  }


  onDelete(empId: number){
    this.empSrv.deleteEmpById(empId).subscribe((res:any)=>{
     ``
      if(res.results){
        this.loadAllEmployee();
        console.log(res);
      }else{
        console.log(res);
      }
    });
  }


}
