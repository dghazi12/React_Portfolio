import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class About extends Component {
    render() {
        return(
            <div className="contact-body test">
                <Grid className="contact-grid test">
                
                <Cell col={6}>
                    <h2>David Ghazi</h2>
                    <img 
                        src="https://brightguyfilms.com/wp-content/uploads/2016/06/avatar-blank-male.png"
                        alt="avatar"
                        style={{height: '250px'}}
                    />

                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello! My name is David Ghazi. These last 6 months, I have been pursuing a career as a full- stack web developer. 
                    I live in Toronto, ON Canada but have had the pleasure of calling many places my home the last few years. I have built full stack applications using Javascript, 
                    jQuery, React, MongoDB, MySQL, Express and NodeJS. I am ready to take on new challenges and if you feel I can be an asset, please feel free to contact me!
                    
                    </p>
                </Cell>

                <Cell col={6}>
                    <h2>Skills</h2>
                    <hr />

                    <div className="contact-list">
                    
                    </div>

                </Cell>

                </Grid>

            </div>
        )
    }
}

export default About;