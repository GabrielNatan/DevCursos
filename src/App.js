import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './global'

import { Provider } from 'react-redux';
import { Store } from './store';
import Home from './pages/Home'
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <GlobalStyle/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
