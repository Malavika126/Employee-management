import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { User } from 'src/user';
import { take } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  user: any;
  minDate: any;
  constructor(
    public dialogRef: MatDialogRef<UpdateProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private empService: EmployeeService
  ) {
    const todayDate = new Date();
    this.minDate = (todayDate?.getFullYear() - 18) + '-' + (todayDate?.getMonth() + 1) + '-' + todayDate?.getDate();
    this.getUserProfileData(data?.id);
  }
  getUserProfileData(id: any): void {
    this.empService.getEmployeeById(id).subscribe(
      (user: any) => {
        this.user = user;
      });
  }

  update(): void {
    this.empService.updateEmployee( this.user, this.data?.id,).pipe(take(1)).subscribe((res: any) => {
      if (res?.id) {
        localStorage.setItem('userInfo', JSON.stringify(res));
        alert("Profile updated successfully");
        this.closeDialog();
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
