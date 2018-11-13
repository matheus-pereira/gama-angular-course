import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo: Todo = {
    id: 0,
    title: '',
    description: '',
    finished: false,
    date: ''
  }

  constructor(
    private todoService: TodoService,
    private router: Router  
  ) { }

  onSubmit() {
    this.todoService.addTodo(this.todo).subscribe((todo) => this.router.navigateByUrl('/todos'));
  }

}
