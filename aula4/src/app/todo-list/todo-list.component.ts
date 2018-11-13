import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private store: Store<AuthState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.select('auth').subscribe(state => {
      this.todos$ = this.todoService.getTodos(state.user.localId);
    });
  }

  onEditTodo(id: number) {
    this.router.navigateByUrl(`/todos/${id}/edit`);
  }

  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos$ = this.todos$.pipe(map(todos => todos.filter(todo => todo.id !== id)));
    });
  }

}
