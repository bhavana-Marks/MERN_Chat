import baseStore from './base.store';
import { observable } from 'mobx';
import axios from 'axios';

export interface friendsList {
  userName: string;
}
export interface user {
  userName: String;
  password: String;
}
export default class HomeStore extends baseStore {
    @observable user:any = [];
    @observable friendsList:friendsList[] = [];

    doLogin = (user:any) => {
        this.user = user;
        this.friendsList = user.friends;
        this.navigateToChat();
    }
    navigateToChat = () => {
       this.rootStore.navigationStore.push('/chat');
    }
}