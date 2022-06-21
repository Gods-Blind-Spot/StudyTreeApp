import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public apiService: ApiService
    ) { }

  get errorControl() {
    return this.ionicForm.controls;
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
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

    const res = await this.apiService.registerUser(this.ionicForm.value);

    console.log(res);
    this.router.navigate(['/login']);

  }

}
