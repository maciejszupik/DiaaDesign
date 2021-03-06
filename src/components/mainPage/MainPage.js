import React, { Component } from 'react';
import Art1 from './Art1';
import Art2 from './Art2';
import Art3 from './Art3';
import Gallery from './Gallery';
import Art4 from './Art4';
import ContactForm from './../ContactForm';
import Footer from './../Footer';
import Header from './../Header';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Art1 />
                <Art2 />
                <Art3 />
                <Gallery />
                <Art4 />
                <ContactForm />
                <Footer />

            </div>
        );
    }
}

export default MainPage;