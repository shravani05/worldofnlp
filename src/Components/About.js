import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';
class About extends Component {
    render() {
        return (
            <div className = "home">
                <div className = "about">
                <h3>About the Developer</h3>
                <h5>Hello, I am Shravani Chavan, a Machine Learning Enthusiast with an aim to develop cool ML Web Apps.</h5>
                <h5>You can contact me at: <a href="mailto:chavanshravani357@gmail.com">chavanshravani357@gmail.com</a></h5>
                </div>

                <div className = "about">
                <h3>References</h3>
                <h5><ExternalLink href = "https://towardsdatascience.com/create-a-complete-machine-learning-web-application-using-react-and-flask-859340bddb33">
                Create a complete Machine learning web application using React and Flask
                </ExternalLink></h5>
                <h5><ExternalLink href = "https://towardsdatascience.com/understand-text-summarization-and-create-your-own-summarizer-in-python-b26a9f09fc70">
                Understand Text Summarization and create your own summarizer in python    
                </ExternalLink></h5>
                </div>
            </div>
        )
    }
}
 
export default About 