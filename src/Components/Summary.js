import React, { Component } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

class Summary extends Component {

    state = {
        summary: ""
    }

    render() {
        return (
            <div className = "home">
                <div className = "intro-text">
                    <h1>Text Summarization</h1>
                    <h4 style = {{margin: "25px", marginBottom: "40px"}}>
                    Text Summarization aims to reduce the size of the text while preserving its important information and overall meaning.
                    </h4>
                </div>
                <Formik
                    initialValues={{content: "Solo travel is not for everyone. Some people return home soon after departing, others cry for weeks before embracing it, and some just embrace it right away. Whether a weekend away, a two-week vacation, or trip around the world, try it at least once. Don’t wait for people or hold back from living your dreams. You could be waiting a long time until someone finally says yes. There’s only now — and if you don’t go, you’ll regret it.", sentences: "2"}}
                    onSubmit = {values => {
                        axios.post('https://worldofnlp.herokuapp.com/summary/', values)
                        .then(response => {
                        this.setState({summary: response.data.result})
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
                                        name="content"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.content}
                                        placeholder="Enter text"
                                        className="text-area-summary"
                                        aria-label="With textarea" />
                                
                                <InputGroup className="text-sentence">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Number of Sentences</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    type="text"
                                    name="sentences"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sentences}
                                    placeholder="Enter number of sentences"
                                />
                            </InputGroup>
                            </div>

                            <Button variant="secondary" size="lg"  type="submit" active>
                                Summarize
                            </Button>
                            <br/>
                        </form>
                    )}
                </Formik>
                {
                this.state.summary === "" ? null :
                <>
                <h3 className = "result-summary">Summary:</h3>
                <div className="text-input">
                    <FormControl as="textarea" 
                            type="text"
                            name="summary"
                            value={this.state.summary}
                            placeholder="Summary"
                            className="text-area-summary"
                            aria-label="With textarea" 
                            readOnly />
                
                </div>
                </>
                }
            </div>
        )
    }
}

export default Summary;