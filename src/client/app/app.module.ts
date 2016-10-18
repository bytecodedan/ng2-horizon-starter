import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent }   from './app.component'
import { ChatComponent } from './chat/chat.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [],
  declarations: [AppComponent, ChatComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
