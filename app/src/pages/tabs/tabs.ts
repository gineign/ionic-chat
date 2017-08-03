import { Component } from '@angular/core';

import { Friends } from '../friends/friends'
import { Chat } from '../chat/chat';
import { Settings } from '../settings/settings'
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  friendsPage = Friends;
  settingsPage = Settings;

  constructor() {

  }
}
