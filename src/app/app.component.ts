import { Component } from '@angular/core';

import { ChatComponent } from './chat/chat.component'

@Component({
  selector: 'my-app',
  template: '<chat></chat>',
  // template: '<h1>My lovely app</h1>',
  styles: [`     
    chat {
      margin: auto;
      max-width: 800px;
      width:100%;
      display:block;        
    }
  `]
})
export class AppComponent { }