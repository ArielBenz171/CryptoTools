import React from 'react';
import Navbar from './Navbar.jsx';
import './styles/TopicBase.css';
import { Link } from 'react-router-dom';

const Others = () => {

    return <div>
        <Navbar />    
        <div className="title">
            Others
        </div>
        <div className = "descript">
        Public-key cryptography, or asymmetric cryptography, is a cryptographic system which uses pairs of keys: public keys 
        (which may be known to others), and private keys (which may never be known by any except the owner). The generation of such 
        key pairs depends on cryptographic algorithms which are based on mathematical problems termed one-way functions. Effective 
        security requires keeping the private key private; the public key can be openly distributed without compromising security. (Wikipedia)
        </div>
        <div className = "subs">
            <Link to = "/CRT" className = "links">Chinese Remainder Theorm </Link>
            <Link to = "/Elgamel" className = "links">Elgamel Public Key Cryptosystem</Link>
            <Link to = "/DF" className = "links">Diffie-Hellman Key Exchange</Link>
            <Link to = "DLP" className = "links">Discrete Log Problem</Link>
        </div>
        <div className = "end">
            Powered by Javascript, React, HTML, & CSS.
        </div>
    </div>

    
}

export default Others;