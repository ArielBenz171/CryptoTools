import React from 'react';
import Navbar from './Navbar.jsx';
import './styles/TopicBase.css';
import { Link } from 'react-router-dom';

const Ciphers = () => {

    return <div>
        <Navbar />    
        <div className="title">
            Ciphers
        </div>
        <div className = "descript">
        Ciphers are arguably the corner stone of cryptography. In general, a cipher is simply just a set of steps (an algorithm) for performing 
        both an encryption, and the corresponding decryption. Despite might what seem to be a relatively simple concept, ciphers play a 
        crucial role in modern technology. Technologies involving communication (including the internet, mobile phones, digital television or even 
        ATMs) rely on ciphers in order to maintain both security and privacy. (practicalcryptography)
        </div>
        <div className = "links">
            <Link to = "/hillCipher" className = "links">Hill Cipher </Link>
            <Link to = "/subCipher" className = "links">Substituition Cipher </Link>
            <Link to = "/cCipher" className = "links">Caesar Cipher </Link>
        </div>
        <div className = "end">
            Powered by Javascript, React, HTML, & CSS.
        </div>
    </div>

    
}

export default Ciphers;