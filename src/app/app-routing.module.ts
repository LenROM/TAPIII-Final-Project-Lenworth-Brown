import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  //Routing Parameters for this application
  {path:'index', title: 'Home Page', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'menu', title: 'Menu', component:MenuComponent, canActivate: [AuthGuard]},
  {path:'about', title: 'About', component:AboutComponent},
  {path:'cart', title: 'Cart', component:CartComponent},
  {path:'order/:id', title:'Order', component:OrderComponent},
  {path:'login', title:'LOGIN', component:LoginComponent},
  {path:'attendance', title: 'Attendance', component:AttendanceComponent},
  {path:'employee', title:'Employee', component:EmployeeComponent},
  {path:'salary', title:'Salary', component:SalaryComponent},
  {path:'register', title: 'Register', component:RegisterComponent},
  // redirect to `index`
   {path: '', redirectTo: '/index', pathMatch: 'full'},
   // Wildcard route for a 404 page
  // {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
