import React from 'react';
import rushita from "./Img/Rushita.jpeg"
import ReactTooltip from 'react-tooltip'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>               
                <div className="mainContainer">
                    <div className="displayImg">
                        <img id="imgRushita" src={rushita}
                            alt="Avtar" />
                    </div>
                    <div className="displayData">
                        <div className="leftdisplayData">
                        </div>
                        <div className="middledisplayData">
                            <label className="lblFullStack">Full Stack Developer</label><br></br>
                            <label className="lblSkills">HTML5|CSS3|React|Redux|Javascript|C#|MongoDB|SQL server</label><br></br>
                            <a data-tip="LinkedIn link :)" data-type="warning" data-place="bottom" id="imgLinkedInd" href="https://www.linkedin.com/in/rushita-devi-404ba121/" >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8Al9MAlNJnueEAktGr0uv4/f4ootgAj9AAk9EAkNDj8fnl8/mj0OoaoNf1+fzY7fd4wOS93fCJyOduveJcs95Jq9x6weTq9/zE5PQAmtSl1Ozx+/3L5/WSyecxoNdAptiaz+rS6vW03O+r2e5ltN9/VRnJAAADwklEQVR4nO2d6ZKiMBgAJWYRMujgfbses+//igta7EgQnNmCxGS6f1kmBrog5Msh6fUAAAAAAAAAAAAAAAAAAAAAAAAAAADgK6wm01nfENPJyrhfOg9ULEwRq2CemhUcRyIwi4jGBv3eF8qwX45avBszXMQWBIMgXpgSHNu4gjlqaUYwjSwJBkFk5nEzN/2Q+UTMTQiurPnlmGgXJ7ZqYY6aGDCc2nmQ3oinBgxn9qphVhFnBgz7Vg37GGKIIYYYYoghhmYM86Ejnw1lPOjP5iMpPTWMN9vdNVe67ORCWjeU/d2/fOdRB4q2DWXp+LuNd4ZiUM6Ztt9XtmwY7bWs49YfN5YNB3rWtPWaaNcwPlTy/vbLUF0qeVsfWrVsqFfDDiI8y4brSl7PrqHcVvIe/TKsTiokLfvZNgwifVJh6Ft7qB8+bD9ssx2XqnJNnLffg7JtWH7Y9DuYpLJumPUuirq4PnYxR2XfMBBiPlyvL4eB7GQk4wUMs5OQSqmu5hhfwrBTMHxRw28U6JxhviRvNDgeBxupvlSsbUMRlfhsD4VSd18Xq/6kXBz2yS7Mop9V+jHbfEHSdtQ2C9/veSuiNjEuJYTjvIg4PpTj2HC9eLri0bKh/FXOGQ6KBK1ftc3CuXgZVss+H58Eeq4YDrNwoNpdvjJtDvWcMVSjt7riT43rAl/WcFhOGIqkvvxl043qiuGp5ha90TT04Yph8wLDfcNFdMXwCYuGFtcPw0n9RfTEsGF8xxPDhoHklzWsjhU38lF7m76s4eNrGK7O5+RB7NZLalt9pwzP/U2UdTk2/Qf/MHDvLn1gOC2GqqSozsrVNvoOGU7vbkR51lNr15K7Y3i+70KIyv+ZDnVjde4YltsDqVfFU93D1BlDbdpNnrT0rfOGl3I/V/zR0msbRGcM9f/d6OtUPup6+s4YjvUytHT3Df9oZUgt3X1DvQeotHT3DfWYJdLSL84bDrRfYohhu2D4yU82HGGIYae0YBhiWPtWA28M1xh2CoZ3IhhiiGFHmIhpfoBh3fSaN4Z7ZwyLCbTv9g+dMSyG1Cqz3E8NXamH3hv2/tvw/KKGYrxKkuTtRvYp3TxLKFBpcs/qVWfXrm/EEPJG/qmcIIrvRfX8ZVB+JWvtEVxbyf5tMMQQQwwxxBBDDDHEEEMMMcTwamjifd7+v5Pd//fq+783gv/7W/yAPUr832fG2l5B0theQdb2e9o9P7XWWFrYs8vYLXrD+33Xekb3zpvZ2DsPAAAAAAAAAAAAAAAAAAAAAAAAAADATf4CTOhfHp7WZSgAAAAASUVORK5CYII="
                                alt="LinkedInd" />
                            </a>
                            <ReactTooltip/>
                            <a data-tip="Github link :)" data-type="warning" data-place="bottom" id="imgLinkedInd" 
                            href="https://github.com/rushitadevi" >
                                <img src="data:image/jpeg;base64,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"
                                alt="Github" />
                            </a>
                            <ReactTooltip/>
                        </div>
                        <div className="rightdisplayData">
                        </div>
                    </div>
                   
                </div>
            </>
        );
    }
}

export default Main;