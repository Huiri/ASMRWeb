import React from 'react';
import '../styles/Quora.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Quora = () => {
    return (
        <div className="quora">
            <Navbar/>
            <div className="quora_content">
                <Sidebar/>
            </div>
        </div>
    );
};

export default Quora;