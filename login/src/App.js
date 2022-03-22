import './App.css';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import NotFound from './components/NotFound';
import Main from './components/Main';
import { signIn } from './auth';

function App() {
  const adminUser = {
    id : "admin@admin.com",
    password : "admin123"
  }
  const [user, setUser] = useState({name : "", id:"", password:""});

  // const [user, setUser] = useState(null);
  // const authenticated = user != null;

  // const login = ({email, password}) => setUser(signIn({email, password}));
  // const logout = () => setUser(null);

  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.id === adminUser.id && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name : details.name,
        id : details.id
      });
    } else {
      setUser({
        name : "",
        id : "",
        password : ""

      })
      console.log("Details do not match");
      setError("Details do not match");

      {/*alert("로그인 정보가 존재하지 않습니다");*/}

    }
  }


  const Logout = () => {
    setUser({name:"", email:""});
    console.log("Logout");
    setError("");
  }
  return (
    <div className="App">
      <BrowserRouter>
      {/* <header>
      <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/login">
          <p>Login</p>
        </Link>
      </header> */}

        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/login" elemet={<LoginForm Login={Login} error={error}/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        {(user.name !== "") ? (
        <div className='welcome'>
        <h2>Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
      </BrowserRouter>

    </div>
  );
}

export default App;
