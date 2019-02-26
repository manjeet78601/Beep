import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {Account} from '../../modals/account/account.interface';
import {ToastController} from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'app-page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  account = {} as Account

  constructor(private toast: ToastController, private ofAuth: AngularFireAuth) {
  
  }

   async register(){
     try{
     const result = await 
     this.ofAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
     this.toast.create({
       message:"Account succesfully created",
       duration:3000
       }).present();
       console.log(result);
     }
     catch(e){
       console.error(e);
       this.toast.create({
         message:e.message,
         duration:3000
         }).present();
     }

  }
  

  

}
