import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Homepage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Home-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/skype2512x512.png"
                            alt="Profile Picture"
                            className="profile-img"
                        />

                        <div className="social-links">
                            
                            <a href="http://google.ca" rel="noopener noreferer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="http://google.ca" rel="noopener noreferer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                        </div>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            
                            <hr />

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Homepage;