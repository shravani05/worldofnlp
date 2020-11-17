import React, { Component } from 'react';
import {Switch, HashRouter, Route} from 'react-router-dom';
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
            <HashRouter basename = "/worldofnlp">
                <Header/>
                <Switch> 
                    <Route path = "/about" component = {About}/>
                    <Route path = "/text_summary" component = {Summary}/>
                    <Route path = "/emotion_analysis" component = {Mood}/>
                    <Route path = "/sentiment_analysis" component = {Sentiment}/>
                    <Route path = "/" component = {Home}/>
                </Switch>
                <Footer/>
            </HashRouter>
        )
    }
}

export default Routes;