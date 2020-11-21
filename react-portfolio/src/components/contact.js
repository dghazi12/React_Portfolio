import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

import ContactMe from '../components/ContactForm'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">

                <Grid className="contact-grid">

                    <Cell col={12}>
                        <h2>Contact Me</h2>
                        <hr />

                    </Cell>
                        
                    <Cell col={6}>

                    <div className="contact-list">

                            <List>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" /> 
                                        (416) 206-8776
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true" /> 
                                        davidaghazi@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>

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

                        </div>

                    </Cell>

                    <Cell col={6}>
                        <ContactMe />
                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Contact;







// import React, { Component } from 'react';
// import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

// import ContactMe from '../components/ContactForm'

// class Contact extends Component {
//     render() {
//         return(
//             <div className="contact-body">
//                 <Grid className="contact-grid">

//                 <Cell col={6}>
//                     <h2>Contact Me</h2>
//                     <hr />

//                     <div className="contact-list">
                    
//                     <List>
                        
//                         <ListItem>
//                             <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
//                                 <i className="fa fa-phone-square" aria-hidden="true" /> 
//                                 (416) 206-8776
//                             </ListItemContent>
//                         </ListItem>
                        
//                         <ListItem>
//                             <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
//                                 <i className="fa fa-envelope-square" aria-hidden="true" /> 
//                                 davidaghazi@gmail.com
//                             </ListItemContent>
//                         </ListItem>

//                     </List>
                    
//                     <ContactMe />

//                     </div>

//                     <div className="social-links">
                            
//                             <a href="https://www.linkedin.com/in/davidaghazi/" rel="noopener noreferer" target="_blank">
//                                 <i className="fa fa-linkedin" aria-hidden="true" />
//                             </a>

//                             <a href="https://dghazi12.github.io/davidaghazi15.github.io/images/Full-Stack%20Resume-pages-1.pdf" rel="noopener noreferer" target="_blank">
//                                 <i className="fa fa-file" aria-hidden="true" />
//                             </a>

//                             <a href="https://github.com/dghazi12" rel="noopener noreferer" target="_blank">
//                                 <i className="fa fa-github" aria-hidden="true" />
//                             </a>

//                     </div>

//                 </Cell>

//                 </Grid>

//             </div>
//         )
//     }
// }

// export default Contact;