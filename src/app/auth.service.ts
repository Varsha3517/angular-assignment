import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userForm: FormGroup): boolean {
    if (userForm.value.username === "Varsha" && userForm.value.password === "123") 
    {
      localStorage.setItem('isLoggedIn', "true")
      return true;
    }
    else if (userForm.value.username === "Tanya" && userForm.value.password === "456")
    {
      localStorage.setItem('isLoggedIn', "true")
      return true;
    }
    else 
    {
      localStorage.setItem('isLoggedIn', "false")
      return false;
    }
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
