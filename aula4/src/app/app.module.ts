import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HomeComponent } from './home/home.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { BoolPipe } from './bool.pipe';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { AuthReducer } from './store/reducers/auth.reducer';
import { AuthGuard } from './auth.guard';
import { CepModule } from './cep/cep.module';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: SingupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodoListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todos/add',
    component: TodoFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todos/:id/edit',
    component: TodoFormComponent,
    canActivate: [AuthGuard],
    resolve: []
  },
  {
    path: 'contador',
    component: ContadorComponent
  },
  {
    path: 'cep',
    loadChildren: './cep/cep.module#CepModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    TodoListComponent,
    TodoItemComponent,
    HomeComponent,
    TodoFormComponent,
    BoolPipe,
    LoginComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    StoreModule.forRoot({
      auth: AuthReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    CepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
