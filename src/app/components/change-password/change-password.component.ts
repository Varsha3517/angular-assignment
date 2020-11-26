import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public service: AuthService, private router: Router) { }
  changepassword: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    reEnterPassword: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
  }

  verifyPassword() {
    if (this.changepassword.value.newPassword === this.changepassword.value.reEnterPassword) {
      alert("Password successfully changed!");
      this.router.navigate(['login']);
    }
    else {
      alert("Passwords do not match!");
      this.router.navigate(['change-password']);
    }
  }
}
