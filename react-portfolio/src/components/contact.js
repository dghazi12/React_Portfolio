import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

import '../styling/Contact.css'
import ContactMe from '../components/ContactForm'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">

                <Grid className="contact-grid">

                    <Cell col={12}>
                        
                        <h2>Contact Me</h2>
                        <hr />

                    </Cell>

                    <Cell col={6}>

                        <div className="contact-list">

                            <div className="phone">
                                <i className="fa fa-phone-square" aria-hidden="true" />
                                (416) 206-8776
                        </div>

                            <div className="email">
                                <i className="fa fa-envelope-square" aria-hidden="true" />
                                davidaghazi@gmail.com
                        </div>

                            <ContactMe />

                        </div>

                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Contact;