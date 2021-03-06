/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(
    private storate: Storage,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
    ) { }

  get errorControl() {
    return this.ionicForm.controls;
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    }
    console.log(this.ionicForm.value);

    const res = await this.apiService.loginUser(this.ionicForm.value);

    console.log(res);
    await this.storate.set('username', res['user']['username']);
    await this.storate.set('aboutme', res['user']['aboutme']);
    console.log(await this.storate.get('username'));
    this.router.navigate(['/home']);

  }

}
