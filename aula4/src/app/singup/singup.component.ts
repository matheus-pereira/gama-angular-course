import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  email = '';
  password = '';
  passwordConfirm = '';
  
  constructor(
    private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) { }

  onSingUp() {
    this.authService.singup(this.email, this.password)
      .subscribe((response: any) => {
        localStorage.setItem('userToken', response.idToken);
        
        this.store.dispatch({
          type: 'SET_USER',
          payload: {
            token: response.idToken,
            user: {
              email: response.email,
              localId: response.localId
            }
          }
        })
        this.router.navigateByUrl('/home');
      }, (error) => {
        console.log(error);
        switch (error.error.error.message) {
          case 'EMAIL_EXISTS':
            alert('E-mail já existente.');
            break;
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            alert('Muitas tentativas, tente novamente mais tarde.');
            break;
          case 'WEAK_PASSWORD':
            alert('A senha deve conter no mínimo 6 caracteres.');
            break;
          default:
            alert('Ocorreu durante a requisição, tente novamente mais tarde.');
        }
      });
  }

}
