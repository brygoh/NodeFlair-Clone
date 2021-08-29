import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const tabs = [
    {id:'1', name:'Recruiters'},
    {id:'2', name:'Jobs'},
    {id:'3', name:'Salaries'},
    {id:'4', name:'Insights'},
    {id:'5', name:'Blog'},
    {id:'6', name:'Sign In'},
];

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="navbar-background">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <img className="nodeflair-logo" src="nodeflair.png" />
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <FaBars className="fa-bar"/>
                </div>
                <div className={click ? 'navbar-menu active' : 'navbar-menu'}>
                    {tabs.map(menu => <href to='/' className="nav-links">{menu.name}</href>)}
                </div>
            </div>
        </div>
    )
}
export default Navbar;