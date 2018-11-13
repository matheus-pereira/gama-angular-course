import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageState } from '../store/reducers/messages.reducer';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messagesCount$: Observable<number>;

  constructor(private store: Store<MessageState>) { }

  ngOnInit() {
    this.messagesCount$ = this.store.select('messages').pipe(pluck('messagesList', 'length'));
  }

}
