import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  avatar = '../assets/noavatar.png';
  username = 'Username';
  aboutme?: string = 'About me...';
  constructor() {}
}
