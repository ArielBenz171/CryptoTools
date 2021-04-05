import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';


export default class Navbar extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <ul>
                    <Link className = 'navbarTitle' to = "/" >
                        CryptoTools
                    </Link>
                    <Link className = 'link' to="/nt">Number Theory</Link>
                    <Link className = 'link' to="/ciphers">Ciphers</Link>
                    <Link className = 'link' to="/algorithms">Algorithms</Link>
                    <Link className = 'link' to="/others">Others</Link>
                </ul>  
            </nav>
        )

    }
}