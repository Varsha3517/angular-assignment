import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeScreenComponent,
    CheckEmailComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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