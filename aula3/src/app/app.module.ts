import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HomeComponent } from './home/home.component';
import { CepDetailsComponent } from './cep-details/cep-details.component';
import { CepExibicaoComponent } from './cep-exibicao/cep-exibicao.component';
import { CepBuscaComponent } from './cep-busca/cep-busca.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { BoolPipe } from './bool.pipe';

const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'todos/add',
    component: TodoFormComponent
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
    path: 'cep',
    component: CepBuscaComponent
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
    CepDetailsComponent,
    CepExibicaoComponent,
    CepBuscaComponent,
    TodoFormComponent,
    BoolPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
