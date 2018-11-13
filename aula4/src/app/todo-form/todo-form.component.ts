import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo: Todo = {
    id: 0,
    title: '',
    description: '',
    finished: false,
    date: '',
    userId: ''
  }
  
  isAdding = true;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private store: Store<AuthState>,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe((state) => {
      if (state.user) {
        this.todo.userId = state.user.localId;
      }
    });

    this.activeRoute.params.subscribe(params => {
      if (params.id) {
        this.isAdding = false;
        this.todoService.getTodo(params.id).subscribe(todo => this.todo = todo);
      }
    });

  }

  onSubmit() {
    if (this.isAdding) {
      this.todoService.addTodo(this.todo).subscribe((todo) => this.router.navigateByUrl('/todos'));
    } else {
      this.todoService.updateTodo(this.todo).subscribe((todo) => this.router.navigateByUrl('/todos'));
    }
  }

}
