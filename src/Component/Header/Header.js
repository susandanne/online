import React from 'react';
import logo from '../../images/images.png';
import './Header.css'


const Header = () => {
    return (
        <div className= "header">
            <img src={logo} alt="Website Logo"/>
            <nav>
                <a href="/account">accounts</a>
                <a href="/active-course">  Course</a>
                <a href="/wish-list">  list</a>
                
            </nav>
        </div>
    );
};

export default Header;