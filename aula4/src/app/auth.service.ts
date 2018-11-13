import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  API_KEY = 'AIzaSyCqCWbX874gT_o4nUDcmcsE3KfodmlHOs4';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/verifyPassword?key=${this.API_KEY}`, { email, password });
  }

  singup(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/signupNewUser?key=${this.API_KEY}`, { email, password });
  }

  checkToken(idToken: string) {
    return this.http.post(`${this.BASE_URL}/getAccountInfo?key=${this.API_KEY}`, { idToken });
  }
}
