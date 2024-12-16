import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClienthomeComponent } from './client/clienthome/clienthome.component';
import { ClientLoginGuardService } from './guard/client-login-guard.service';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { AppHomeComponent } from './app-home/app-home.component';
import { UserProfileComponent } from './client/user-profile/user-profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddEmployeeComponent } from './client/add-employee/add-employee.component';
import { EmployeeService } from './employee.service';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'home', component: AppHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  // { path: '**', redirectTo: '' },
  { path: 'profile', component: UserProfileComponent, canActivate: [ClientLoginGuardService] },
  { path: 'clienthome', component: ClienthomeComponent, canActivate: [ClientLoginGuardService] },
  { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [AdminLoginGuardService] },
  { path: 'addEmployee', component: AddEmployeeComponent, canActivate: [AdminLoginGuardService]},
  { path: 'emplist', component: EmpListComponent, canActivate: [AdminLoginGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
