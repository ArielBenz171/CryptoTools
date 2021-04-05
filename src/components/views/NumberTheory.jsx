import React from 'react';
import Navbar from './Navbar.jsx';
import './styles/TopicBase.css';
import { Link } from 'react-router-dom';

const NumberTheory = () => {

    return <div>
        <Navbar />    
        <div className="title">
            Number Theory
        </div>
        <div className = "descript">
        Number theory used to be considered the purest of pure math. Leonard Dickson once said “Thank God that number theory is unsullied 
        by any application.” Dickson died in 1954. Had he lived a little longer he would not have said what he did. There were applications 
        of number theory in Dickson’s day, but many have been developed more recently. The best known application of number theory is public
         key cryptography, such as the RSA algorithm. Public key cryptography in turn enables many technologies we take for granted, such as 
         the ability to make secure online transactions. (John D. Cook)
        </div>
        <div className = "subs">
            <Link to = "/gcd" className = "links">Greatest Common Factor</Link>
            <Link to = "/gcdEq" className = "links">Greatest Common Factor by Equation</Link>
            <Link to = "/modCheck" className = "links">Modulous Check</Link>
            <Link to = "/modInverse" className = "links">Modulous Inverse</Link>
        </div>
        <div className = "end">
            Powered by Javascript, React, HTML, & CSS.
        </div>
    </div>

    
}

export default NumberTheory;