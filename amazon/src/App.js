import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
import {auth} from './firebase'
import {useStateValue} from './StateProvider';
import Payment from './components/Payment';
import Payments from './components/Payments';
// const promise
function App() {
  document.cookie = "safeCookie1=foo; SameSite=Lax"; 
  document.cookie = "safeCookie2=foo";  
  document.cookie = "crossCookie=bar; SameSite=None; Secure";
  const[{}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log(`현재 사용자 ${authUser}`);
      if(authUser) {
        dispatch({
          type:'SET_USER',
          user : authUser
        })

      } else {
          dispatch({
            type : 'SET_USER',
            user : null
          })
      }
    })
  },[])
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/payments' element={<Payments/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
