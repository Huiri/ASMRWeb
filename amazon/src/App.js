import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
