import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import { signIn } from './auth';
import AuthRoute from './AuthRoute';

import Profile from './components/Profile';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import NotFound from './components/NotFound';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({email, password}) => setUser(signIn({email, password}));
  const logout = () => setUser(null);
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to = "/">
            <h2>Home</h2>
          </Link>
          <Link to ="/about">
            <h4>About</h4>
          </Link>
          {authenticated ? (<LogoutButton logout = {logout} />
          ) : (
            <Link to="/login">
              <h4>Login</h4>
            </Link>
          )}
        </header>
        <hr/>
        <Routes>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="*" element={<NotFound/>}/>
          <Route 
          path="login" 
          render = {props => (
            <LoginForm authenticated={authenticated} 
            login={login} 
            {...props}/>
          )}/>
          <AuthRoute
          authenticated={authenticated}
          path="profile"
          render = {props => <LoginForm authenticated={authenticated} login={login} {...props}/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
