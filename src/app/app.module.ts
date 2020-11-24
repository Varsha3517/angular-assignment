import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { SampleComponent } from './components/sample/sample.component';
import { FormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeScreenComponent,
    CheckEmailComponent,
    ChangePasswordComponent,
    SampleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatDatepickerModule,
    MatInputModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const modules = [
  MatFormFieldModule,
];

@NgModule({
imports: [...modules],
exports: [...modules]
,
})export class MaterialModule {};





import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
// import { MaterialFileInputModule } from 'ngx-material-file-input';
// import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  //  MaterialFileInputModule,
  //  MatIconModule,

  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  //  MaterialFileInputModule,
  //  MatIconModule,

  ]
})

export class AngularMaterialsModule { }