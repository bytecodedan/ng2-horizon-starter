import { Component, OnInit } from '@angular/core'

import { ChatService } from './chat.service'

@Component({
  selector: 'chat',
  styles: [`
        ul {
            list-style-type: none;
            padding:0;
        }
       
        .message {
            height: 50px;
            padding:5px;
        }
        .message img {
            vertical-align:middle;
        }
        .message .text {
            vertical-align:middle;
            margin-left:5px;
            font-size:20px;
        }
        .message .datetime {
             color:darkgrey;
             float:right;
        }
        form{
           
        }
        input {
            width: 90%;
            height: 50px;
            font-size: 20px;
            float: left;
            padding: 10px;
        }
        button{
            width:10%;
            height: 50px;
        }
   `],
  template: `<h1>Messages</h1>
    <form autocomplete="off" novalidate>
        <input [(ngModel)]="newMessage" name="newMessage">
        <button type="submit" (click)="addMessage(newMessage)">Send</button>
    </form>
    <ul>
        <li *ngFor="let message of messages; let i = index" class="message">
        <img height="50px" width="50px" src="{{message.url}}" />
        <span> {{message.text}} </span>
        <span class="datetime u-pull-right">
            {{message.datetime}}
          </span>
        </li>
    </ul>
    <h3>Count: {{count}}</h3>`,
  providers: [ChatService]
})

export class ChatComponent implements OnInit {
  newMessage = '';
  messages = [];
  count = 0;

  constructor(private _chatService: ChatService) {  }

  ngOnInit() {
    this.getChats()
    this.getCount()
  }

  getChats() {
    this._chatService
      .getChats()
      .subscribe((newMessages) => {
        this.messages = [...newMessages];
      });
  }

  addMessage(text) {
    if (text) {
      this._chatService
        .sendChat(text)
        .subscribe();
      this.newMessage = '';
    }
  }

  getCount() {
    this._chatService
      .getCount()
      .subscribe((data) => {
        // this.count = count;
        this.count = data.map(x => 1).reduce( (x,y) => x + y, 0 )
      });
      
  }
 
}