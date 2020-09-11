import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    render() {
        return(

            <div className="projects-background">

            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176px', background: 'url(https://inteng-storage.s3.amazonaws.com/images/MARCH/sizes/sound_levitation_resize_md.jpg) center / cover'}}>Open Sound</CardTitle>
                <CardText>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/morenogomes/project_2" target="_blank">GitHub</Button>
                    <Button colored href="https://stark-woodland-75959.herokuapp.com/app" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176px', background: 'url(https://www.maytech.net/wp-content/uploads/2018/12/password-945x627.jpg) center / cover'}}>Password Generator</CardTitle>
                <CardText>Created an application that generates a random password based on user- selected criteria. Password generated may consist of numbers, letters and symbols.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi03.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://dghazi12.github.io/davidaghazi03.github.io/" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176px', background: 'url(https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?cs=srgb&dl=pexels-pixabay-356079.jpg&fm=jpg) center / cover'}}>Code Quiz</CardTitle>
                <CardText>Created a quiz that will store all high- scores upon completion of the quiz. Users will be penalized 10 seconds for every wrong answer submited, thus affecting final score.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi04.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://dghazi12.github.io/davidaghazi04.github.io/" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#black', height: '176px', background: 'url(https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/all_about_your_body_clock_slideshow/650x350_all_about_your_body_clock_slideshow.jpg) center / cover'}}>Work Day Scheduler</CardTitle>
                <CardText>Created a simple calendar application that allows the user to input and save events for each hour of the day. Completed events are marked in green.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi05.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://dghazi12.github.io/davidaghazi05.github.io/" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            </div>

            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176px', background: 'url(https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/Spain2019/Weather%20Spain.jpg) center / cover'}}>Weather Dashboard</CardTitle>
                <CardText>Created a website that will display the current and 5 day forecast of any city searched for by the user. Used OpenWeather API to retrieve weather data for cities.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi06.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://dghazi12.github.io/davidaghazi06.github.io/" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176px', background: 'url(https://www.securitymagazine.com/ext/resources/SEC/2018/January/Top-12-Practices-Secure-Coding-Security-Magazine.jpg) center / cover'}}>Readme Generator</CardTitle>
                <CardText>This project asks a series of questions, awaiting the response from the user. Based on the response, a good README.MD file will be created for your project.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/dghazi12-davidaghazi09.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://github.com/dghazi12/dghazi12-davidaghazi09.github.io/blob/master/Images/Readme_Generator.gif" target="_blank">Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#black', height: '176px', background: 'url(https://www.scu.edu/media/leavey-school-of-business/illustrations-mp/Managing-Employees-360x196.jpg) center / cover'}}>Employee Summary</CardTitle>
                <CardText>This application consists of prompts requiring the user to input information about the team manager and team members. The application will create a nicely formatted HTML file.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi10.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://github.com/dghazi12/davidaghazi10.github.io/blob/master/images/EmployeeSummary.gif" target="_blank">Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#black', height: '176px', background: 'url(https://github.com/dghazi12/davidaghazi13.github.io/blob/master/public/assests/img/burger.jpg?raw=true) center / cover'}}>Eat-Da-Burger</CardTitle>
                <CardText>Created a burger logger with mySQL, Node, Express, Handlebars and ORM. Used Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi13.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://ghazi-burger-logger.herokuapp.com/" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            </div>

            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#black', height: '176px', background: 'url(https://blog.bonus.ly/hubfs/state-of-employee-engagement-2019-featured-1.png) center / cover'}}>Employee Tracker</CardTitle>
                <CardText>In this application, it helps employers architect and build a solution for managing a company's employees using node, inquirer and mySQL.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi12.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://github.com/dghazi12/davidaghazi12.github.io/blob/master/images/EmployeeTracker.gif" target="_blank">Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#black', height: '176px', background: 'url(https://atlassianblog.wpengine.com/wp-content/uploads/2018/07/meeting-notes_featured@2x.png) center / cover'}}>Note Taker</CardTitle>
                <CardText>This application can be used to write, save, and delete notes. Uses express backend to save and retrieve note data from a JSON file.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi11.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://quiet-anchorage-33654.herokuapp.com/" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
           

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176px', background: 'url(https://img.washingtonpost.com/rf/image_480w/2010-2019/WashingtonPost/2017/06/16/Others/Images/2017-06-15/iStock-542197824.JPG?uuid=kd9zIlHmEee3Tg0nhdMIPQ) center / cover'}}>Workout Tracker</CardTitle>
                <CardText>This application is a workout tracker. Created Mongo database with a Mongoose schema and handled routes with Express.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi17.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://ghazi-workout-tracker.herokuapp.com/" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176px', background: 'url(https://v4n4a9g5.rocketcdn.me/wp-content/uploads/Budget.jpg) center / cover'}}>Budget Trackers</CardTitle>
                <CardText>In this application, the user will be able to add expenses and deposits to their budget with or without an internet connection.</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/dghazi12/davidaghazi18.github.io" target="_blank">GitHub</Button>
                    <Button colored href="https://ghazi-budget-tracker.herokuapp.com/" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            </div>

            </div>

        )
    
    }

}

export default Projects;