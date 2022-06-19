import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private storate: Storage
  ) { }


  // TODO: Create the API call method
  private async apiCall(directory: string, method: string, params?: Object || string) {
    switch (method) {
      case 'post':

        break;
      case 'get':

        break;
      default:
        break;
    }
  }
}
