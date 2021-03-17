import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './global'

import Home from './pages/Home'
function App() {
  return (
    <Router>
    <GlobalStyle/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
