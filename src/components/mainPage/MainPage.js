import React, { Component } from 'react';
import Art1 from './Art1';
import Art2 from './Art2';
import Art3 from './Art3';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Art1 />
                <Art2 />
                <Art3 />
            </div>
        );
    }
}

export default MainPage;