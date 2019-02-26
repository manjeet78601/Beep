import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {ComponentsModule} from '../../components/components.module';
import { RegisterPage } from '../register/register';
import { LoginformComponent } from '../../components/login-form/login-form.component';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
@NgModule({
  declarations: [
    LoginPage,
    AngularFireAuthModule,
    AngularFireAuth
    
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule,
    AngularFireAuthModule,
    AngularFireAuth

  ],
  exports:[
    LoginPage
  ]
})
export class LoginPageModule {}
