import React from 'react';
import Navbar from './Navbar.jsx';
import './styles/TopicBase.css';
import { Link } from 'react-router-dom';

const Algorithms = () => {

    return <div>
        <Navbar />    
        <div className="title">
            Algorithms
        </div>
        <div className = "descript">
            Modern cryptography is heavily based on mathematical theory and computer science practice; cryptographic algorithms are designed 
            around computational hardness assumptions, making such algorithms hard to break in actual practice by any adversary. While it is 
            theoretically possible to break into a well-designed system, it is infeasible in actual practice to do so. Such schemes, if well 
            designed, are therefore termed "computationally secure"; theoretical advances, e.g., improvements in integer factorization algorithms, 
            and faster computing technology require these designs to be continually reevaluated, and if necessary, adapted. There exist 
            information-theoretically secure schemes that provably cannot be broken even with unlimited computing power, such as the one-time pad, 
            but these schemes are much more difficult to use in practice than the best theoretically breakable but computationally secure schemes. (Wikipedia)
        </div>
        <div className = "links">
            <Link to = "/EAlgo" className = "links">Euclidian Algorithm </Link>
            <Link to = "/EEAlgo" className = "links">Extended Euclidian Algorithm </Link>
            <Link to = "/FPA" className = "links">Fast Powered Algorithm </Link>
            <Link to = "/BGA" className = "links">Babysteps-GiantsSteps Algorithm </Link>
        </div>
        <div className = "end">
            Powered by Javascript, React, HTML, & CSS.
        </div>
    </div>

    
}

export default Algorithms;