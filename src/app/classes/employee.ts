export interface IAttendance {
	EmployeeId:number;
	empName: string
empContactNo: string
	AttendanceDate: string
	AttendanceId: number
	InTime: string
	OutTime: string
	IsFullDay: boolean
}


export class attendance {
	empName: string
empContactNo: string
	AttendanceId: number;
	EmployeeId: number;
	AttendanceDate?: Date;
	InTime?: Date;
	OutTime?: Date;
	IsFullDay: boolean;
	constructor(){
		this.empName = "";
        this.empContactNo = "";
		this.AttendanceId = 0;
		this.EmployeeId = 0;
		this.AttendanceDate = undefined;
		this.InTime = undefined;
		this.OutTime = undefined;
		this.IsFullDay = false;
	}
}


export interface ILeave {
	empName: string;
	empContactNo: string
	employeeId: number
	LeaveDate: string	
	leaveId: number
	leaveReason: string
	numofFulldays: number
	numofHalfdays:number
}

export class leave {
	leaveId: number;
	employeeId: number;
	leaveDate?: Date;
	leaveReason: string;
	numofFulldays: number;
	numofHalfdays: number;
	constructor(){
		this.leaveId = 0;
		this.employeeId = 0;
		this.leaveDate = undefined;
		this.leaveReason = "";
		this.numofFulldays = 0;
		this.numofHalfdays = 0;
	}
}

export interface ISalary {
	empName: string
	empContactNo: string
	employeeId: number
	salaryId: number;
	salaryDate: string
	totalAdvance: number
	presentDays: number
	salaryAmount: number
}

export class salary {
	salaryId: number;
	employeeId: number;
	salaryDate?: Date;
	totalAdvance: number;
	presentDays: number;
	salaryAmount: number;
	constructor(){
		this.salaryId = 0;
		this.employeeId = 0;
		this.salaryDate = undefined;
		this.totalAdvance = 0;
		this.presentDays = 0;
		this.salaryAmount = 0;
	}
}