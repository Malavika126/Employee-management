import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 username: string = '';
 pass:string = '';
 cpass:string='';
 user: User=new User(0,"","","","","");
 errorMessage: string = '';
 showForgotPassword: boolean = false;
 isFormSubmitted: boolean = false;
 loginForm = new FormGroup<any>({});
 loginType: string = 'admin';
  constructor(private authService: AuthService, private router: Router,private fb:FormBuilder, private employeeService: EmployeeService) {
    //const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }
  

  
  onSubmit() {
    
    this.user.email=this.loginForm.controls['email'].value;
    this.user.password=this.loginForm.controls['password'].value;
    if (this.loginType === "admin") {
      this.authService.loginUser(this.user).subscribe(
        (response: any) => {
          console.log("***response8888",response);
          // if (response?.activateAccount === false) {
          //   alert("Your account is not activated . Please check after some time.")
          // } else {
            this.authService.storeLoggedInUser(this.user);
            localStorage.setItem('userInfo', JSON.stringify(response));
            localStorage.setItem('uname', response?.firstName);
            localStorage.setItem('uId', response?.id);
            localStorage.setItem('role', response?.role);
            if (response?.role === 'user') {
             this.router.navigate(['/clienthome']);
            } else {
             this.router.navigate(['/adminDashboard']);
            }
          }
          
        ,
        (error: any) => {
          console.error('Login failed:', error);
          console.log('>>>>>>>>>>>>>>>>>>', error?.error?.message );
          if (error?.error?.message === 'User not found') {
            this.errorMessage = "User Not found. Please check your email or password."
            return;
          }
          if (error.status === 401 || error.status === 404) {
            this.errorMessage = 'Invalid username or password';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
        }
      );
    } else {
      this.employeeService.getEmployeeByUserPassword(this.user.email, this.user.password).subscribe((res: any) => {
        if (res && res?.id) {
          this.authService.storeLoggedInUser(this.user);
          localStorage.setItem('userInfo', JSON.stringify(res));
          localStorage.setItem('uname', res?.name);
          localStorage.setItem('uId', res?.id);
          localStorage.setItem('role', 'user');
          this.router.navigate(['/clienthome']);
        }
      });
    }
    
  }
  
  

  resetForm() {

    this.user.email = '';
    this.user.password = '';
  }


  }

