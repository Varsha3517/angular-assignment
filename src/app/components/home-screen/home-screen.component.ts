import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'


/** @title Basic datepicker */
/*
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
})
export class DatepickerOverviewExample {}
*/

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})


export class HomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options():void {
    document.getElementById('container').style.zIndex = "1";
    document.getElementById('options').style.zIndex = "5";
  }

  disappear(): void
  {
    document.getElementById('container').style.zIndex = "5";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "1";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "-5";
  }

  close(): void
  {
    document.getElementById('container').style.zIndex = "5";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "1";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "-5";
  }

  update(): void
  {
    document.getElementById('container').style.zIndex = "5";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "1";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "-5";
  }

  superAdmin(): void
  {
    document.getElementById('container').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "-5";
    document.getElementById('superAdmin').style.zIndex = "5";
    document.getElementById('admin').style.zIndex = "-5";
  }

  admin(): void
  {
    document.getElementById('container').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "-5";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "5";
  }

  myFunction():void {
    document.getElementById('container').style.zIndex = "-5";
  }


}
