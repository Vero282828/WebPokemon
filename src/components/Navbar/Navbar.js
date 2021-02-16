import React, {useState} from 'react';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';
import './style.css';


function Navbar(){
    const {click,setClick} = useState(false);
    const handleclick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);
    return( 
       <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" >
                    POKEMON
                </Link>
                <div className="menu-icon" onClick ={handleclick}>
                {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" >
                        Pokemon List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/detailpoke' className="nav-links" >
                        Detail Pokemon
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/detailpoke' className="nav-links" >
                        My Pokemon List
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
       </>
       
    )
    
}

export default Navbar

 