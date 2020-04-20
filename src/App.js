import React from 'react';
import './App.css';
import MainPage from './pages/main';
import ShopPage from './pages/shop';
import BlogPage from './pages/blog';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/shop'/>
        <Route path='/blog' component={BlogPage} />
      </Switch>
    </div>
    </Router>
  );
}

export default withRouter(App);

//<Route path='/shop' component={ShopPage} />