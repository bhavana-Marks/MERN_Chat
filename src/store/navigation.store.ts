import rootStore from './root.store';
import { RouterStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

export default class NavigationStore extends RouterStore {
     browserHistory = createBrowserHistory();

}