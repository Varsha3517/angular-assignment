import { Injectable } from '@angular/core';
import { Superadmin } from '../components/home-screen/s_admin';
import { SUPERADMIN } from '../components/home-screen/s_admin-list';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {

  constructor() { }

  getSuperAdmins(): Superadmin[] {
    return SUPERADMIN;
  }
}
