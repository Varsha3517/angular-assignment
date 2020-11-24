import { Injectable } from '@angular/core';
import { Admin } from '../components/home-screen/admin';
import { ADMIN } from '../components/home-screen/admin-list';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getAdmins(): Admin[] {
    return ADMIN;
  }
}
