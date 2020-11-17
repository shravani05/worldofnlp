import React, { Component } from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import Sentiment from './Components/Sentiment';
import Summary from './Components/Summary';
import Mood from './Components/Mood';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch> 
                    <Route path = "/worldofnlp/about" component = {About}/>
                    <Route path = "/worldofnlp/text_summary" component = {Summary}/>
                    <Route path = "/worldofnlp/emotion_analysis" component = {Mood}/>
                    <Route path = "/worldofnlp/sentiment_analysis" component = {Sentiment}/>
                    <Route path = "/" component = {Home}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default Routes;