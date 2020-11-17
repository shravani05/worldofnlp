import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {

    render() {
        return (
            <footer className = "footer" >
                <Navbar.Brand href="/worldofnlp" className = "header-nav">WORLD OF NLP</Navbar.Brand>
            </footer>
        )
    }
} 

export default Footer;