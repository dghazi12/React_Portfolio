import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import Main from './components/main'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div style={{height: '720px', position: 'relative'}}>
    <Layout fixedHeader>
    <Header className="header-color" title={<span><span style={{ color: '#ddd' }}></span><strong>My Portfolio</strong></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio" className="header-color" >
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"></div>
            <Main />
        </Content>
    </Layout>
    </div>
    );
  }
}


// class App extends Component {
//   render() {
//     return (
//     <div style={{height: '720px', position: 'relative'}}>
//     <Layout style={{background: 'url(https://www.ibm.com/blogs/internet-of-things/wp-content/uploads/2019/02/leadspace_clairepenny.jpg) center / cover'}}>
//         <Header transparent title="My Portfolio" style={{color: 'white'}}>
//             <Navigation>
//                 <Link to="/about">About Me</Link>
//                 <Link to="/projects">Projects</Link>
//                 <Link to="/resume">Resume</Link>
//                 <Link to="/contact">Contact</Link>
//             </Navigation>
//         </Header>
//         <Drawer title="My Portfolio">
//             <Navigation>
//                 <Link to="/about">About Me</Link>
//                 <Link to="/projects">Projects</Link>
//                 <Link to="/resume">Resume</Link>
//                 <Link to="/contact">Contact</Link>
//             </Navigation>
//         </Drawer>
//         <Content>
//             <div className="page-content"></div>
//             <Main />
//         </Content> />
//     </Layout>
//     </div>
//     );
//   }
// }

export default App;