import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import '../styling/AboutMe.css';
import SqlSVG  from '../images/SkillsSVG/sqlSVG'
import HtmlSVG  from '../images/SkillsSVG/htmlSVG'
import HerokuSVG  from '../images/SkillsSVG/HerokuSVG'
import GithubSVG  from '../images/SkillsSVG/GithubSVG'
import CssSVG  from '../images/SkillsSVG/CssSVG'
import BootstrapSVG  from '../images/SkillsSVG/BootstrapSVG'
import NodeSVG  from '../images/SkillsSVG/NodeSVG'
import ReactSVG  from '../images/SkillsSVG/ReactSVG'
import MongoSVG  from '../images/SkillsSVG/MongoSVG'
import JQuerySVG  from '../images/SkillsSVG/jQuerySVG'
import JavascriptSVG  from '../images/SkillsSVG/JavscriptSVG'
import MaterialSVG  from '../images/SkillsSVG/MaterialSVG'
import profile from '../images/ProfilePicture/profile-picture.jpeg';

class About extends Component {
    render() {
        return(
            <Grid className="about-body">
                <Grid className="about-grid">
                
                    <Cell col={6}>
                        <h2>David Ghazi</h2>

                        <img className='about-profile' src={profile} alt="profile"></img>

                        <p className="about-text">
                            Full- Stack Web Developer seeking a full or part time position! I have a bachelor's in Engineering from Cape Breton University, 
                            as well as a Full Stack Development certificate from the University of Toronto. I am currently focusing on React based web applications 
                            but welcome any challenges/opportunities that come my way. I have built full stack applications using Javascript, jQuery, React, MongoDB, 
                            MySQL, Express and NodeJS. I am a passionate, hard working individual who is eager to learn and ready to take the next step in my Dev career. 
                            If you believe I can be an asset, please feel free to contact me!
                        </p>
                    </Cell>

                    <Cell className="hide-skills" col={6}>
                    
                        <h2>Skills</h2>

                        <hr />

                        <Grid >

                            <Grid className="demo-grid-1">
                                <Cell style={{paddingBottom: '10px'}} col={4}><HtmlSVG /></Cell>
                                <Cell col={4}><CssSVG /></Cell>
                                <Cell col={4}><HerokuSVG /> </Cell>
                            </Grid>

                            <Grid className="demo-grid-1">
                                <Cell className="layout" col={4}><JavascriptSVG /></Cell>
                                <Cell className="layout" col={4}><ReactSVG /></Cell>
                                <Cell className="layout" col={4}><BootstrapSVG /></Cell>
                            </Grid>
                            
                            <Grid className="demo-grid-1">
                                <Cell className="layout" col={4}><GithubSVG /></Cell>
                                <Cell className="layout" col={4}><SqlSVG /></Cell>
                                <Cell className="layout" col={4}><MaterialSVG /></Cell>
                            </Grid>

                            <Grid className="demo-grid-1">
                                <Cell className="layout" col={4}><JQuerySVG /></Cell> 
                                <Cell className="layout" col={4}><NodeSVG /></Cell>
                                <Cell className="layout" col={4}><MongoSVG /></Cell>
                            </Grid>

                        </Grid>

                    </Cell>

                </Grid>

            </Grid>
        )
    }
}

export default About;