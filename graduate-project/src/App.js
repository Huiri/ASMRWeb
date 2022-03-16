import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Login from './components/Login';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Layout from './components/Layout/Layout';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    {/*<Route element={<Layout/>}>*/}
                        <Route path="/" element={<Main/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    {/*</Route>*/}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;