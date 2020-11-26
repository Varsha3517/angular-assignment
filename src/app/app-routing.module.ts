import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { LoginComponent } from './components/login/login.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'check-email', component: CheckEmailComponent },
  { path: 'home-screen', component: HomeScreenComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
