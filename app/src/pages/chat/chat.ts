import { Component } from '@angular/core';
import {  ViewController, IonicApp, Events } from 'ionic-angular';
import { OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { ChatService } from '../../services/chat';
import { Message } from '../../models/message';
import { User } from '../../models/user';

@Component({
  templateUrl: 'chat.html'
})

export class Chat implements OnInit {
  msg: string;
  msgs = new Rx.Observable<Message[]>();
  friend: User;
  me: User;
  content: any;
  el: any;

  constructor(public chat: ChatService,
              public viewCtrl: ViewController,
              public app: IonicApp,
              public e: Events) {
    this.me = chat.me;
    this.e.subscribe('newMessage', (e) => {
      console.log(e)
      this.scrollTo();
    });
  }

  ngOnInit(): void {
    this.msg = '';

    this.chat.currentFriend
      .subscribe((user: User) => {
        this.friend = user;
        this.msgs = this.chat.getCurrentMessages(this.friend);
      });
  }

  ngAfterViewInit(): void {
    // this.content = this.app.getComponent('chat');
    // this.el = this.content.elementRef.nativeElement;
  }

  scrollTo(): void {
    // can't get proper this.el.scrollHeight?
    // this.content.scrollTo(0, 5000000, 200);
  }

  sendMessage(): void {
    let msg = new Message({
      isRead: false,
      sender: this.me,
      recipient: this.friend,
      msg: this.msg
    });

    this.chat.sendMessage(msg).then((resp) => {
      this.msg = '';
    });
  }

  public close(): void {
    this.viewCtrl.dismiss()
    // this.modal.close();
    // this.modal.close();
  }
}
