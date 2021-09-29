import React from 'react';
import '../Reactcss/navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#home">Home</a></li>
                    <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Products <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Product 1</a></li>
                        <li><a href="#">Product 2</a></li>
                        <li><a href="#">Product 3</a></li>
                        <li><a href="#">Product 3</a></li>
                        <li><a href="#">Product 3</a></li>
                        <li><a href="#">Product 3</a></li>
                    </ul>
                    </li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio" onClick={()=>document.getElementById("#portfolio").scrollIntoView()}>Protfolio</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default Navbar;