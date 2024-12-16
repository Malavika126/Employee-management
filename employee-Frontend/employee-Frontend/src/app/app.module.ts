import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientheaderComponent } from './client/clientheader/clientheader.component';
import { ClientprofileComponent } from './client/clientprofile/clientprofile.component';

import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { ClienthomeComponent } from './client/clienthome/clienthome.component';
import { ClientLoginGuardService } from './guard/client-login-guard.service';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { AppHomeComponent } from './app-home/app-home.component';
import { UserProfileComponent } from './client/user-profile/user-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { AddEmployeeComponent } from './client/add-employee/add-employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AdminDashboardComponent,
    ClientheaderComponent,
    ClientprofileComponent,
    AdminheaderComponent,
    AppheaderComponent,
    ClienthomeComponent,
    AppHomeComponent,
    UserProfileComponent,
    UpdateProfileComponent,
    AboutusComponent,
    AccountInformationComponent,
    AddEmployeeComponent,
    EmpListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [ClientLoginGuardService, AdminLoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
