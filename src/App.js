import './App.css';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';

import RegisterList from './component/register/RegisterList';
import RegisterCreate from './component/register/RegisterCreate';
import RegisterView from './component/register/RegisterView';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={RegisterList}></Route>
          <Route path="/register-list" component={RegisterList}></Route>
          <Route path="/register-add/:id" component={RegisterCreate}></Route>
          <Route path="/register-view/:id" component={RegisterView}></Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
