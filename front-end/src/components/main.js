import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
// import Resume from './resume';
import Projects from './projects';
// import Contact from './contact';
import AboutMe from './aboutMe';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/resume" component={Resume} /> */}
        <Route exact path="/aboutme" component={AboutMe} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/projects" component={Projects} />
    </Switch>
);

export default Main;