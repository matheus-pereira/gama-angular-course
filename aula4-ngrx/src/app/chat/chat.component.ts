import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageState } from '../store/reducers/messages.reducer';
import { AddMessageAction, DeleteMessageAction } from '../store/actions/messages.actions';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageText = '';
  messagesList$: Observable<any[]>;

  constructor(private store: Store<MessageState>) { }

  ngOnInit() {
    this.messagesList$ = this.store.select('messages').pipe(pluck('messagesList'));
  }

  onSendClick() {
    if (!this.messageText) return;
    this.store.dispatch(new AddMessageAction({
      text: this.messageText,
      date: new Date()
    }));
    this.messageText = '';
  }

  onMessageClick(index) {
    this.store.dispatch(new DeleteMessageAction({
      index
    }));
  }

}
