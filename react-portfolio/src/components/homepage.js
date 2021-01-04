import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import '../styling/Homepage.css';
import profile from '../images/ProfilePicture/profile-picture.jpeg';
// import PDF from '../images/PDF/DG_Resume.pdf';

class Homepage extends Component {
    render() {
        return(
            <div className="container">
                <Grid className="Home-grid">
                    <Cell col={12}>
                            
                        <img className='profile-picture' src={profile} alt="profile"></img>

                        <div className="social-links">
                                
                            <a href="https://www.linkedin.com/in/davidaghazi/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin socialResponsive" aria-hidden="true" />
                            </a>

                            <a href="https://www.google.ca" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-file" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/dghazi12" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />
                            </a>

                        </div>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                                
                            <hr />

                            <p> 
                                HTML | CSS | React | Javascript | jQuery | Bootstrap
                                    <br />  
                                NodeJS | Express | MongoDB | mySQL | Heroku | Github
                            </p>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Homepage;