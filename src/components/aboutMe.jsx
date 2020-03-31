import React, { Component } from 'react';
import { FaMobileAlt,FaReact,FaNode,FaHtml5,FaBootstrap, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {GoGitBranch} from "react-icons/go";
import { Table } from 'react-bootstrap';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="main">
                    <div className="mainAbout">
                        <div className="leftAbout">
                        </div>
                        <div className="middleAbout">
                            <label className="lblAboutMe"> I am full stack developer.<br></br>
                            I hold Masters in Computer Science degree.<br></br>
                           I am extreamly passionate about my work and career and everyday try to learn new things.
                        My main goal is to perform to the best I can , receive feedback and keep improving.
                   </label>
                        </div>
                        <div className="rightAbout">
                        </div>
                    </div>
                    <div className="displayContact">
                        <div className="leftContactMe">
                        </div>
                        <div className="middleContactMe">
                            <label className="lblvirtual">My virtual extensions</label> <br></br>
                            <Table bordered size="sm" responsive>                            
                                <thead >
                                    <tr>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><MdEmail />rushi.devi@gmail.com </td>
                                        <td><FaMobileAlt />+48739588416</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="rightContactMe">                            
                        </div> 
                    </div>
                     <div className="weaponary">
                      <div className="leftWeaponary">
                      </div>
                      <div className="middleWeaponary">
                      <label className="lblvirtual">My Weaponry!</label> <br></br>
                            <Table bordered size="sm" responsive>  
                                <tbody>
                                    <tr>
                                        <td><span><FaHtml5/> HTML5</span></td>
                                        <td><span><FaBootstrap/> Bootstrap4</span></td>
                                    </tr>
                                    <tr>
                                        <td><span><FaReact/> React</span></td>
                                        <td><span><FaNode/> Node Js</span></td>
                                    </tr>
                                    <tr>
                                        <td><span><FaGithub/><a className="githubLink" href="https://github.com/rushitadevi">Github</a></span></td>                                       
                                        <td><span>C#</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>MongoDB</span></td>
                                        <td><span>Sql server</span></td>
                                    </tr>
                                </tbody>
                            </Table>
                      </div>
                      <div className="rightWeaponary">
                      </div>
                     </div>
                </div>
            </>
        );
    }
}

export default AboutMe;
