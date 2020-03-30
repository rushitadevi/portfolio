import React, { Component } from 'react';
import {Link} from "react-router-dom"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-dark bg-light">
            <a class="navbar-brand" href="/">Rushita Devi</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <Link to={"/"}  className="nav-link" >Home </Link>
                    </li>
                    <li class="nav-item">
                    <Link to={"/projects"}  className="nav-link" >Projects</Link>
                    </li>
                    <li class="nav-item">
                    <Link to={"/aboutMe"}  className="nav-link" >About me</Link>
                    </li>
                </ul>

            </div>
        </nav>
         );
    }
}
 
export default NavBar;
