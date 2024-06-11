import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../app-services/employee.service';

import { AttendanceService } from '../../app-services/attendance.service';
import { IAttendance, attendance } from 'src/app/classes/employee';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit{

  attendanceArray: IAttendance[] = [];
attendanceObj: attendance = new attendance();
employeeArray: any[] = [];

constructor(private empSrv:EmployeeService, private attSrv:AttendanceService){}
  ngOnInit(): void {
    this.loadAllAttendance();
    this.getEmployee();
  }


  getEmployee(){
    this.empSrv.getAllEmployee().subscribe((result:any)=>{
      
      this.employeeArray = result["data"];
      console.log(result);
    })
    
  }
  
  loadAllAttendance(){
    this.attSrv.getAllAttend().subscribe((res: any)=>{
      this.attendanceArray = res["data"];
      console.log(res);
    })
    // this.http.get("").subscribe((res:any)=>{
    //   this.attendanceArray = res.data;
    // })
  }
  
  onEdit(id:number){
    this.attSrv.getAttById(id).subscribe((res: any)=>{
      this.attendanceObj = res.data.attendance[0];
      console.log(`attendanceObj >>${JSON.stringify(this.attendanceObj)}`)
    });
  }
  
  onDelete(id:number){
    this.attSrv.deleteAttById(id).subscribe((res:any)=>{
      ``
       if(res.results){
         this.loadAllAttendance();
         console.log(res);
       }else{
         console.log(res);
       }
     });
  }
  
  onSave(){
    this.attSrv.createAttend(this.attendanceObj).subscribe((res:any)=>{
        
      if(res.results){
        this.loadAllAttendance();
        this.attendanceObj = new attendance();
        console.log(res.message);
      }else{
        console.log(res.message);
      }
      
    });
  }
  
  onUpdate(id:number){
    this.attSrv.updateAttend(this.attendanceObj, id).subscribe((res:any)=>{
          
      this.loadAllAttendance();
      this.attendanceObj = new attendance();
      console.log(res);
      // this.resetObj()
    
  });
  }
  
  }


