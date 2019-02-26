import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import{AngularFireAuth} from 'angularfire2/auth';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LoginformComponent } from '../components/login-form/login-form.component';
import { FIREBASE_CONFIG } from './app.firebase.config';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
   // AngularFireAuth
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
      
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule { }
