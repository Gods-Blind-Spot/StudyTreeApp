import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.urlAPI + 'User/';

  constructor(
    private http: HttpClient,
    private storate: Storage
  ) { }


  async getUser(id: number): Promise<object> {
    const rurl = this.url + id;

    console.log(rurl);

    const res = await this.http.get(rurl).toPromise();

    return res;
  }

  async registerUser(body: object) {
    const rurl = this.url + 'register';
    console.log(rurl);

    const res = await this.http.post(rurl, body).toPromise();
    console.log(res);

    return res;
  }

  async loginUser(body: object) {
    const rurl = this.url + 'login';
    console.log(rurl);

    const res = await this.http.post(rurl, body).toPromise();
    console.log(res);

    return res;
  }
}
