import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTodos(userId: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.URL}/users/${userId}/todos`);
  }

  getTodo(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.URL}/todos/${todoId}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.URL}/todos`, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.URL}/todos/${todo.id}`, todo);
  }

  deleteTodo(todoId: number): Observable<any> {
    return this.http.delete(`${this.URL}/todos/${todoId}`);
  }

}
