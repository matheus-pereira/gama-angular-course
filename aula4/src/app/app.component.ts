import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { AuthState } from './store/reducers/auth.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedUser$: Observable<AuthState>;

  constructor(
    private store: Store<AuthState>,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loggedUser$ = this.store.select('auth').pipe(pluck('user'));

    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      this.authService.checkToken(userToken)
        .subscribe((response: any) => {
          this.store.dispatch({
            type: 'SET_USER',
            payload: {
              user: {
                email: response.users[0].email,
                localId: response.users[0].localId
              },
              token: userToken
            }
          });
        }, (error) => {
          console.log(error);
          localStorage.removeItem('userToken');
          this.router.navigateByUrl('/');
        });
    }
  }

  logout() {
    this.store.dispatch({
      type: 'LOGOUT'
    });
    localStorage.removeItem('userToken');
    this.router.navigateByUrl('/');
  }
}
