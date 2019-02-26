import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components/components';
import{IonicModule} from 'ionic-angular';
import { LoginformComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form';
@NgModule({
	declarations: [ComponentsComponent,]
      //LoginformComponent,
    //RegisterFormComponent],
//	imports: [IonicModule],
	//exports: [ComponentsComponent
   // LoginformComponent,
    //RegisterFormComponent]
})
export class ComponentsModule {}
