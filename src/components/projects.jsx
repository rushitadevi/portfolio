import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="mainProjects">
                    <div className="leftMainProjects">
                    </div>
                    <div className="middleMainProjects">
                        <div className="displayCards" >
                            <ul className="ulList">
                                <li>
                                    <div className="card">
                                        <div className="divImg">
                                            <div style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}>
                                                <div style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}>
                                                    <iframe src="https://www.loom.com/embed/0aad25fc62c940f1b62c42f1a9314203" frameborder="0"
                                                        webkitallowfullscreen mozallowfullscreen allowfullscreen
                                                        style={{
                                                            position: "absolute", top: "0", left: "0", width: "100%",
                                                            height: "100%"
                                                        }}
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </div>{/* end of divImg */}
                                        <Scrollbars style={{ height: 300 }}>
                                            <ul className="card__content">
                                                <h3>Mini Travel Guide</h3>
                                                <li className="list-group-item">HTML</li>
                                                <li className="list-group-item">Bootstrap</li>
                                                <li className="list-group-item">React</li>
                                            </ul> {/* end of card_content */}
                                        </Scrollbars>
                                        <div className="card-footer">
                                            <a href="https://github.com/rushitadevi/mini-travel-guide" >Github Repo</a>
                                        </div>
                                    </div> {/* end of card */}
                                </li> {/* end of li */}
                            </ul>
                        </div>
                        <div className="displayCards" >
                            <ul className="ulList">
                                <li>
                                    <div className="card">
                                        <div className="divImg">
                                            <div style={{position: "relative", paddingBottom: "56.25%", height: 0}}>
                                                <iframe src="https://www.loom.com/embed/cf18502137814044a4cbd830332e448d" frameborder="0"
                                                    webkitallowfullscreen mozallowfullscreen allowfullscreen
                                                    style={{position: "absolute" , top: 0, left: 0 ,  width: "100%" , height: "100%"}} >
                                                </iframe>
                                            </div>
                                        </div>
                                        <Scrollbars style={{ height: 300 }}>
                                            <ul className="card__content">
                                                <h3>Mini Spotify</h3>
                                                <li className="list-group-item">HTML</li>
                                                <li className="list-group-item">Bootstrap</li>
                                                <li className="list-group-item">React</li>
                                                <li className="list-group-item">Redux</li>
                                            </ul> {/* end of card_content */}
                                        </Scrollbars>
                                        <div className="card-footer">
                                            <a href="https://github.com/rushitadevi/mini-spotify-app" >Github Repo</a>
                                        </div>
                                    </div> {/* end of card */}
                                </li> {/* end of li */}
                            </ul>
                        </div>
                        <div className="displayCards" >
                            <ul className="ulList">
                                <li>
                                    <div className="card">
                                        <div className="divImg">
                                            <div style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}>
                                                <div style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}>
                                                    <iframe src="https://www.loom.com/embed/0aad25fc62c940f1b62c42f1a9314203" frameborder="0"
                                                        webkitallowfullscreen mozallowfullscreen allowfullscreen
                                                        style={{
                                                            position: "absolute", top: "0", left: "0", width: "100%",
                                                            height: "100%"
                                                        }}
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <Scrollbars style={{ height: 300 }}>
                                            <ul className="card__content">
                                                <h3>Tracker</h3>
                                                <li className="list-group-item">HTML</li>
                                                <li className="list-group-item">Bootstrap</li>
                                                <li className="list-group-item">React</li>
                                                <li className="list-group-item">Redux</li>
                                                <li className="list-group-item">Node JS</li>
                                                <li className="list-group-item">MongoDB</li>
                                            </ul> {/* end of card_content */}
                                        </Scrollbars>
                                        <div className="card-footer">
                                            <a href="https://github.com/rushitadevi/TrackerTeamFE" >Github Repo</a>
                                        </div>
                                    </div> {/* end of card */}
                                </li> {/* end of li */}
                            </ul>
                        </div>

                    </div>
                    <div className="rightMainProjects">
                    </div>
                </div>
            </>
        );
    }
}

export default Projects;