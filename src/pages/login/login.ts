import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{LoginResponse} from '../../modals/login/login-response.interface';
import {Account} from '../../modals/account/account.interface';
//import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

account = {} as Account;
//@Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, public navParams: NavParams ) {
  //this.loginStatus = new EventEmitter<any>();
  }

   
   async login(){
    
    try{
 
   const result = await 
 this.navParams.data.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
 console.log(result);
 
    }
    catch(e){
      console.error(e);
     
      }
    
    } 
 
    navigateToPage (pageName:string) {
    pageName === 'TabsPage'? this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName)
    
  }


}

