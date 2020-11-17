import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href="/" className = "header-nav">WORLD OF NLP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    </Nav>
                    <Nav className = "header-nav">
                        <Nav.Link href="/" style = {{fontFamily:  "'Josefin Sans', sans-serif"}}>Home</Nav.Link>
                        <NavDropdown title="Explore" id="collasible-nav-dropdown" style = {{fontFamily:  "'Josefin Sans', sans-serif"}}>
                            <NavDropdown.Item href="/sentiment_analysis">Sentiment Analysis</NavDropdown.Item>
                            <NavDropdown.Item href="/emotion_analysis">Emotion Analysis</NavDropdown.Item>
                            <NavDropdown.Item href="/text_summary">Text Summary</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about" style = {{fontFamily:  "'Josefin Sans', sans-serif"}}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
} 

export default Header;