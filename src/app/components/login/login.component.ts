import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm : FormGroup = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  })

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() : void {
    if(this.authService.login(this.userForm)) {
      this.router.navigate(['home-screen']);
    }
    else {
      alert("Login failed: Invalid Username or Password!");
    }
  }
}

