import React from 'react';
import './App.css';
import MainPage from './pages/main';
import ShopPage from './pages/shop';
import BlogPage from './pages/blog';
import ManuPage from './pages/manufactures';
import ManuInfo from './pages/manuInfo'
import LoginPage from './pages/loginPage'
import SignupPage from './pages/signupPage'
import PostPage from './pages/post'
import BlogContent1 from './pages/blogContent'
import BlogContent2 from './pages/blogContent2'
import BlogContent3 from './pages/blogContent3'
import BlogContent4 from './pages/blogContent4'
import BlogContent5 from './pages/blogContent5'
import AccountPage from './pages/account'
import CreateManuPage from './admin/createManu'
import EditManuPage from './admin/editManu'
import AdminPage from './admin/adminPage'
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
        <Route exact path='/blogContent/:blogId' component={PostPage}/>
        
        <Route exact path='/article/first' component={BlogContent1} />
        <Route exact path='/article/second' component={BlogContent2} />
        <Route exact path='/article/third' component={BlogContent3} />
        <Route exact path='/article/fourth' component={BlogContent4} />
        <Route exact path='/article/fifth' component={BlogContent5} />
        <Route path='/manufactures' component={ManuPage}/>
        <Route exact path='/manufacture-database/:ManuId'component={ManuInfo}/>
        <Route exact path='/account' component={AccountPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SignupPage}/>
        <Route path='/admin/create-manufacturer' component={CreateManuPage}/>
        <Route path='/admin/edit/:ManuId' component={EditManuPage}/>
        <Route path='/admin' component={AdminPage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default withRouter(App);

