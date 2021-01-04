import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import '../styling/Projects.css'
import Sound from '../../src/images/ProjectsImages/OpenSound.jpg'
import TorontoTech from '../../src/images/ProjectsImages/TorontoTech.jpg'
import Quiz from '../../src/images/ProjectsImages/CodeQuiz.jpg'
import Scheduler from '../../src/images/ProjectsImages/Scheduler.jpg'
import Weather from '../../src/images/ProjectsImages/Weather.jpg'
import Readme from '../../src/images/ProjectsImages/ReadmeGenerator.jpg'
import Summary from '../../src/images/ProjectsImages/EmployeeSummary.jpg'
import Daburger from '../../src/images/ProjectsImages/DaBurger.jpg'
import Tracker from '../../src/images/ProjectsImages/EmployeeTracker.jpg'
import Note from '../../src/images/ProjectsImages/NoteTaker.png'
import Workout from '../../src/images/ProjectsImages/WorkoutTracker.jpg'
import Budget from '../../src/images/ProjectsImages/Budget.jpg'

class Projects extends Component {

    render() {
        return (

            <Grid className="container">

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Open Sound Image"
                            image={Sound}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Open Sound
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                An alternative to Spotify, this webpage gives the user the ability to search for an artist, song or album and add them in their profile to create their own personalized playlist.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/morenogomes/project_2" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://stark-woodland-75959.herokuapp.com/app" target="_blank">
                            Live Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Toronto Tech Image"
                            image={TorontoTech}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Toronto Tech Mentoring
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Helped a team of professional developers create a website aimed at supporting youth in the Greater Toronto Area. This website provides information for volunteers, clients and partners.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/Toronto-Tech-Mentoring/TTM-Website" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://torontotechmentoring.netlify.app/" target="_blank">
                            Live Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Code Quiz Image"
                            image={Quiz}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Code Quiz
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Created a quiz that will store all high- scores upon completion of the quiz. Users will be penalized 10 seconds for every wrong answer submited, thus affecting final score.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi04.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://dghazi12.github.io/davidaghazi04.github.io/" target="_blank">
                            Live Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Work Day Scheduler Image"
                            image={Scheduler}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Work Day Scheduler
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Created a simple calendar application that allows the user to input and save events for each hour of the day. Completed events are marked in green.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi05.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://dghazi12.github.io/davidaghazi05.github.io/" target="_blank">
                            Live Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Weather Dashboard Image"
                            image={Weather}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Weather Dashboard
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Created a website that will display the current and 5 day forecast of any city searched for by the user. Used OpenWeather API to retrieve weather data for cities.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi06.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://dghazi12.github.io/davidaghazi06.github.io/" target="_blank">
                            Live Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Readme Generator Image"
                            image={Readme}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Readme Generator
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This project asks a series of questions, awaiting the response from the user. Based on the response, a good README.MD file will be created for your project.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/dghazi12-davidaghazi09.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/dghazi12-davidaghazi09.github.io/blob/master/Images/Readme_Generator.gif" target="_blank">
                            Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Employee Summary Image"
                            image={Summary}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Employee Summary
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This application consists of prompts requiring the user to input information about the team manager and team members. The application will create a nicely formatted HTML file.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi10.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi10.github.io/blob/master/images/EmployeeSummary.gif" target="_blank">
                            Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Da Burger Image"
                            image={Daburger}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Eat-Da-Burger
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Created a burger logger with mySQL, Node, Express, Handlebars and ORM. Used Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi13.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://ghazi-burger-logger.herokuapp.com/" target="_blank">
                            Live Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Employee Tracker Image"
                            image={Tracker}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Employee Tracker
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                In this application, it helps employers architect and build a solution for managing a company's employees using node, inquirer and mySQL.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi12.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi12.github.io/blob/master/images/EmployeeTracker.gif" target="_blank">
                            Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Note Taker Image"
                            image={Note}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Note Taker
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This application can be used to write, save, and delete notes. Uses express backend to save and retrieve note data from a JSON file.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi11.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://quiet-anchorage-33654.herokuapp.com/" target="_blank">
                            Live Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Workout Tracker Image"
                            image={Workout}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Workout Tracker
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This application is a workout tracker. Created Mongo database with a Mongoose schema and handled routes with Express.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi17.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://ghazi-workout-tracker.herokuapp.com/" target="_blank">
                            Live Demo
                            </Button>
                    </CardActions>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Budget Tracker Image"
                            image={Budget}
                            className="card-image"
                        />
                        <CardContent className="project-description">
                            <Typography gutterBottom variant="h5" component="h2">
                                Budget Trackers
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                In this application, the user will be able to add expenses and deposits to their budget with or without an internet connection.
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary" href="https://github.com/dghazi12/davidaghazi18.github.io" target="_blank">
                            GitHub
                            </Button>
                        <Button size="large" color="primary" href="https://ghazi-budget-tracker.herokuapp.com/" target="_blank">
                            Live Demo
                            </Button>
                    </CardActions>
                </Card>

            </Grid>

        )
    }
}

export default Projects;