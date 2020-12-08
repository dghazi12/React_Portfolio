import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

import './styling/App.css';

class App extends Component {
  render() {
    return (
        <div style={{height: '720px', position: 'relative'}}>
            <Layout fixedHeader>
                <Header className="navbar-color" title={<span><span style={{ color: '#ddd' }}></span><strong>My Portfolio</strong></span>}>
                    <Navigation className=" hide">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="My Portfolio" className="navbar-color" >
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;