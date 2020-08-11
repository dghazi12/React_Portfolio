import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import profile from '../profile-picture.png'

class Homepage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Home-grid">
                    <Cell col={12}>

                        <img 
                            src="https://brightguyfilms.com/wp-content/uploads/2016/06/avatar-blank-male.png"
                            style = {{width: 250, height: 250, borderRadius: 250 / 2}}
                            alt="Profile Picture"
                            className="profile-img"
                        />

                        <div className="social-links">
                            
                            <a href="https://www.linkedin.com/in/davidaghazi/" rel="noopener noreferer" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>

                            <a href="https://dghazi12.github.io/davidaghazi15.github.io/images/Full-Stack%20Resume-pages-1.pdf" rel="noopener noreferer" target="_blank">
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