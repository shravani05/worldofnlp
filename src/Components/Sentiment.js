import React, { Component } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button' 

class Sentiment extends Component {

    state = {
        sentimentClassification: ""
    }

    render() {
        return (
            <div className = "home">
                <div className = "intro-text">
                    <h1>Sentiment Analysis</h1>
                    <h4 style = {{margin: "30px", marginBottom: "40px"}}>
                        Sentiment Analysis aims to detect positive or negative feelings from text
                    </h4>
                </div>
                <Formik
                    initialValues={{review: "I am good review!"}}
                    onSubmit = {values => {
                        axios.post('https://worldofnlp.herokuapp.com/sentiment/', values)
                        .then(response => {
                        this.setState({sentimentClassification: response.data.result})
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
                            
                            <div className = "text-input">
                                <FormControl as="textarea" 
                                type="text"
                                name="review"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.review}
                                placeholder="Enter review"
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
                        
                {
                this.state.sentimentClassification === "" ? null :
                
                (this.state.sentimentClassification === "1" ? 
                    <div className = "result">
                    <h3><img className = "sentiment-img" alt = "positive" src = "./images/positive.webp"/>
                    POSITIVE</h3>
                    </div>
                     :
                     <div className = "result">
                    <h3><img className = "sentiment-img" alt = "negative" src = "./images/negative.png"/>
                    NEGATIVE</h3>
                    </div>
                )
                }
            </div>
        )
    }
}

export default Sentiment;