import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ Homepage }/>
        <Route path="/about" component={ About }/>
        <Route path="/contact" component={ Contact }/>
        <Route path="/projects" component={ Projects }/>
    </Switch>
)

export default Main;