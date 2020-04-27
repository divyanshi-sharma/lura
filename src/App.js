import React from 'react';
import './App.css';
import MainPage from './pages/main';
import ShopPage from './pages/shop';
import BlogPage from './pages/blog';
import ManuPage from './pages/manufactures';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='/manufactures' component={ManuPage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default withRouter(App);

//<Route path='/shop' component={ShopPage} />