import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; //for routing
import Main from './main';
import AboutMe from './aboutMe.jsx';
import Navbar from './navBar.jsx';
import Projects from './projects';

class Welcome extends Component {
    constructor(props) {        
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>            
            <Router>
                <Navbar/>
                <Route path="/" exact component={Main} />
                <Route path="/aboutMe" exact component={AboutMe} />
                <Route path="/projects" exact component={Projects}/>
            </Router>
            </>
         );
    }
}
 
export default Welcome;