import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import profile from '../assets/profile-picture.jpeg';

class Homepage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Home-grid">
                    <Cell col={12}>
                        
                        <img src={profile} alt="profile" 
                            style={{
                                height: 290,
                                width: 290,
                                borderRadius: 290 / 2,
                                overflow: "hidden",
                                borderWidth: 3,
                                borderColor: "red",
                            }}
                        />

                        <div className="social-links">
                            
                            <a href="https://www.linkedin.com/in/davidaghazi/" rel="noopener noreferer" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>

                            <a href="https://docs.google.com/document/d/17IE7tXSfNFH4ZIzMGNix1OhwwpHrekPvjrYr6qzh4Lg/edit" rel="noopener noreferer" target="_blank">
                                <i className="fa fa-file" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/dghazi12" rel="noopener noreferer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>

                        </div>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            
                            <hr />

                            <p>HTML | CSS | React | Javascript | jQuery | Bootstrap

                                <br /> 
                                
                                NodeJS | Express | MongoDB | mySQL | Heroku | Github</p>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Homepage;