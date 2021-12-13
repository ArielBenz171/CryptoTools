import React from 'react';
import Navbar from './Navbar.jsx';
import './styles/FunctionBase.css';
import { Link } from 'react-router-dom';
import '../containers/MATH3107-master/cCipher.js';

const CaesarCipher = () => {

    return <div>
        <Navbar />    
        <div className="title">
            Caesar Cipher
        </div>
        <div className = "descript">
        In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code 
        or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type 
        of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed 
        number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by 
        A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private 
        correspondence. (Wikipedia)
        </div>
        <div className="vertical" />
        <div className = "input">
            Input:
            <form>
                <label for="string"> String: </label> 
                <input type="text" name="string" /> <br />
                <label for="shift"> Shift: </label>
                <input type="number" name="shift" min="1" max="25" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        <div className="output">
            Output: <br />
            Answer
        </div>
        <div className = "end">
            Powered by Javascript, React, HTML, & CSS.
        </div>
    </div>

    
}

export default CaesarCipher;