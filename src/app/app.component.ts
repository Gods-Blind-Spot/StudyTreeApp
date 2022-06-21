import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  avatar =  '../assets/noavatar.png';
  username = 'Username';
  aboutme = 'About me...';
  constructor(
    private apiService: ApiService,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.username = await this.storage.get('username') || 'username';
    this.aboutme = await this.storage.get('aboutme') || 'About me...';
  }


}
