import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

/**
 * Generated class for the LoginformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginformComponent {

  text: string;

  constructor(private navCtrl: NavController) {
  }
 /* navigateToPage(pageName:string){
    pageName==='TabsPage'? this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName);
    
  }*/

}
