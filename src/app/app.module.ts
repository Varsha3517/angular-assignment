import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeScreenComponent,
    CheckEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
