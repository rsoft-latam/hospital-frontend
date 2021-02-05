import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    ForgotPasswordModule
  ],
  declarations: []
})
export class AuthModule { }
