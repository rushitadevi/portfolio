import React, { Component } from 'react';
import { Link } from "react-router-dom"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-md navbar-dark bg-light">
                    <a href="/" class="navbar-brand">Rushita Devi</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav">
                            <li class="nav-item active">
                                <Link to={"/"} className="nav-link" >Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/projects"} className="nav-link" >Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/aboutMe"} className="nav-link" >About me</Link>
                            </li>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;
