import { Component } from '@angular/core'

import {  ModalController } from 'ionic-angular';
import * as Rx from 'rxjs/Rx';
import { ChatService } from '../../services/chat';
import { User } from '../../models/user';
import { Chat } from '../chat/chat';

@Component({
  templateUrl: 'friends.html'
})

export class Friends {
  public searchQuery: string = '';
  friends: Rx.Subject<User[]> = new Rx.Subject<User[]>();
  chatPage: any;

  constructor(public chat: ChatService, public modalCtrl: ModalController) {
    this.friends = chat.friends;
    this.chatPage = Chat;
  }

  public openChat(user: User): void {
    this.chat.setCurrentFriend(user);
    let chatModal = this.modalCtrl.create(this.chatPage);
    chatModal.present();
  }

}
