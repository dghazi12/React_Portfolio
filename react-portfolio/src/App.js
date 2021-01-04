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
                <Header className="navbar-color" title={<span><span style={{ color: '#ddd' }}></span><strong className="navbar-title">My Portfolio</strong></span>}>
                    <Navigation className=" hide">
                        <Link className="navbar-tab" to="/">Home</Link>
                        <Link className="navbar-tab" to="/about">About Me</Link>
                        <Link className="navbar-tab" to="/projects">Projects</Link>
                        <Link className="navbar-tab" to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer className="navbar-tab, navbar-color" title="My Portfolio" >
                    <Navigation>
                        <Link className="navbar-tab" to="/">Home</Link>
                        <Link className="navbar-tab" to="/about">About Me</Link>
                        <Link className="navbar-tab" to="/projects">Projects</Link>
                        <Link className="navbar-tab" to="/contact">Contact</Link>
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