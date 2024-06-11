import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './pages/partials/logout/logout.component';
import { TokenInterceptor } from './shared/interceptor/token.interceptor';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    OrderComponent,
    LoginComponent,
    LogoutComponent,
    AttendanceComponent,
    EmployeeComponent,
    SalaryComponent,
    LayoutComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class appModule { }
