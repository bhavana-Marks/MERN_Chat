import * as React from 'react';
import * as Styled from 'styeld';
import { observer, Provider } from 'mobx-react';
import rootStore from 'store/root.store';
import {Router, Route, Redirect} from 'react-router-dom';
import Chat from './containers/chat/chat';
import Home from './containers/Home/home';

@observer
class App extends React.Component {
  render () {
    return(
      <Provider rootStore={rootStore}>
              <Router history={rootStore.history}>
                <Route
                  exact={true}
                  path="/"
                  render={() => (
                      <Redirect to="/home"/>
                  )}
                />
                <Route path='/home' component={Home}/>
                <Route path='/chat' component={Chat}/>
              </Router>
      </Provider>
    )
  }
}

export default App;
