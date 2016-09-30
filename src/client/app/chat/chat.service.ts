import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

// var Horizon = require('@horizon/client')

import { HorizonService } from '../horizon/horizon.service'

export class ChatService extends HorizonService {
  // horizon = Horizon({host: 'localhost:8181'});
  // chat = this.horizon('chat');
  table = 'chat'
  chat = [] 
  avatar_url = `http://api.adorable.io/avatars/50/${new Date().getMilliseconds()}.png`

  constructor() {
    super()
    this.connect().then(()=> {      
      this.horizon(this.table).watch().subscribe((result)=> {
        console.log('result', result)
        this.chat = result
      });      
    }); 
  }

  getChats(): Observable<[any]> {
    // return this.chat
    return this.horizon(this.table)
      .order('datetime', 'descending')
      .limit(8)
      .watch()
  }

  sendChat(text: string): Observable<[any]> {
    // return this.chat
    return this.horizon(this.table).store({
      text: text,
      datetime: new Date(),
      url: this.avatar_url,
    })
  }

  getCount(): Observable<any> {
    // return this.chat
    return this.horizon(this.table)
      // .count()
      .watch()
  }

}