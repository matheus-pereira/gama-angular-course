import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HomeComponent } from './home/home.component';
import { CepDetailsComponent } from './cep-details/cep-details.component';

const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'contador',
    component: ContadorComponent
  },
  {
    path: 'cep/:cep',
    component: CepDetailsComponent
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
    CepDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
