import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { AdminService } from 'src/app/service/admin.service';
import { SuperadminService} from 'src/app/service/superadmin.service';
import { Admin } from './admin';
import { Superadmin } from './s_admin';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})

export class HomeScreenComponent implements OnInit {

  admin: Admin = {
    name: "",
    employeeCode: "",
    mail: ""
  }

  adminlist: Admin[];

  s_admin: Superadmin = {
    s_name: "",
    s_employeecode: "",
    s_mail: ""
  }

  superadminlist: Superadmin[];

  constructor(private adminservice: AdminService, private superadminservice: SuperadminService) { }

  ngOnInit(): void {
    this.loadAdmins();
    this.loadSuperAdmins();
  }

  loadAdmins(): void {
    this.adminlist = this.adminservice.getAdmins();
  }

  loadSuperAdmins(): void {
    this.superadminlist = this.superadminservice.getSuperAdmins();
  }

  options(): void {
    document.getElementById('container').style.zIndex = "1";
    document.getElementById('options').style.zIndex = "5";
  }

  disappear(): void {
    document.getElementById('container').style.zIndex = "5";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "1";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "-5";
  }

  close(): void {
    document.getElementById('container').style.zIndex = "5";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "1";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "-5";
  }

  update(): void {
    document.getElementById('container').style.zIndex = "5";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "1";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "-5";
  }

  superAdmins(): void {
    document.getElementById('container').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "-5";
    document.getElementById('superAdmin').style.zIndex = "5";
    document.getElementById('admin').style.zIndex = "-5";
  }

  admins(): void {
    document.getElementById('container').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "-5";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "5";
  }

  myFunction(): void {
    document.getElementById('container').style.zIndex = "-5";
  }

  save1() {
    const tempAdmin: Admin = { ...this.admin};
    this.adminlist.unshift(tempAdmin)
  }

  save2() {
    const tempSuperadmin: Superadmin = { ...this.s_admin};
    this.superadminlist.unshift(tempSuperadmin)
  }

  delete1(admin: Admin): void {
    this.adminlist.forEach((item, index) => {
      if (item === admin) {
        this.adminlist.splice(index, 1);
      }
    });
  }

  delete2(s_admin: Superadmin): void {
    this.superadminlist.forEach((item, index) => {
      if (item === s_admin) {
        this.superadminlist.splice(index, 1);
      }
    });
  }
}
