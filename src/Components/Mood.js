import React, { Component } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button' 

class Mood extends Component {

    state = {
        mood: ""
    }

    renderSwitch(mood){
        switch(mood)
        {
            case "0": return (
                <div className = "result">
                <h3><img className = "sentiment-img" alt = "angry" src = "./images/angry.png"/>
                ANGER</h3>
                </div>
            )

            case "1": return (
                <div className = "result">
                <h3><img className = "sentiment-img" alt = "fear"  src = "./images/fear.png"/>
                FEAR</h3>
                </div>
            )
            case "2": return (
                <div className = "result">
                <h3><img className = "sentiment-img"  alt = "joy" src = "./images/joy.png"/>
                JOY</h3>
                </div>
            )
            case "3": return (
                <div className = "result">
                <h3><img className = "sentiment-img" alt = "love" src = "./images/love.png"/>
                LOVE</h3>
                </div>
            )
            case "4": return (
                <div className = "result">
                <h3><img className = "sentiment-img"  alt = "sad" src = "./images/sad.png"/>
                SADNESS</h3>
                </div>
            )
            case "5": return (
                <div className = "result">
                <h3><img className = "sentiment-img"  alt = "surprise" src = "./images/surprise.png"/>
                SURPRISE</h3>
                </div>
            ) ;

            default :
            return null;
        }
    }

    render() {
        return (
            <div className = "home">
                <div className = "intro-text">
                    <h1>Emotion Analysis</h1>
                    <h4 style = {{margin: "30px", marginBottom: "40px"}}>
                        Emotion Analysis aims to detect and recognize types of feelings through the expression of texts, such as anger,
                        fear, joy, sadness, love, and surprise.
                    </h4>
                </div>
                <Formik
                    initialValues={{text: "I now feel compromised and skeptical of the value of every unit of work I put in"}}
                    onSubmit = {values => {
                        axios.post('https://worldofnlp.herokuapp.com/mood/', values)
                        .then(response => {
                        this.setState({mood: response.data.result})
                        })
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="text-input">
                                <FormControl as="textarea" 
                                    type="text"
                                    name="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.text}
                                    placeholder="Enter text"
                                    className="text-area"
                                    aria-label="With textarea" />
                            </div>

                            <Button variant="secondary" size="lg"  type="submit" active>
                                Classify
                            </Button>
                            <br/>
                        </form>
                    )}
                </Formik>
                {this.renderSwitch(this.state.mood)}
                    
                
            </div>
        )
    }
}

export default Mood;