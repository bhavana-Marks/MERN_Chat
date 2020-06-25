import HomeStore from './home.store';
import ChatStore from './chat.store';
import NavigationStore from './navigation.store';
import { observable } from 'mobx';
import { syncHistoryWithStore } from 'mobx-react-router';
import * as io from 'socket.io-client';

export class RootStore {
    @observable homeStore: HomeStore;
    @observable navigationStore:NavigationStore;
    @observable chatStore: ChatStore;
    socket: any;
    history: any;

    constructor() {
        this.homeStore = new HomeStore(this);
        this.chatStore = new ChatStore(this);
        this.navigationStore = new NavigationStore();
        this.history = syncHistoryWithStore(this.navigationStore.browserHistory, this.navigationStore);
        this.socket =  io.connect('http://localhost:4000/');
    }
}
export default new RootStore();