import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Image from 'react-bootstrap/Image'

class Home extends Component{

 render(){
    return (
      <div>
            <Image src="./images/nlp2.jpeg" fluid className = "img"/>
            <div className = "home">
                <h4>Dive into the world of Natural Language Processing by exploring following options.
                     Play with the text and experience the power of Machine Learning Algorithms. </h4>
                <div className = "cards">
                    <CardDeck>
                    <Card
                        bg='dark'
                        text='white'
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Body>
                        <Card.Title>Sentiment Analysis</Card.Title>
                        <Card.Text>
                        Get a quick analysis of whether your Review belongs to the Positive or Negative class.
                        </Card.Text>
                        <Card.Link href="/worldofnlp/#/sentiment_analysis">Explore now</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card
                        bg='dark'
                        text='white'
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Body>
                        <Card.Title>Emotion Analysis</Card.Title>
                        <Card.Text>
                        Get a quick analysis of the emotion of the writer based on the writer's content.
                        </Card.Text>
                        <Card.Link href="/worldofnlp/#/emotion_analysis">Explore now</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card
                        bg='dark'
                        text='white'
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Body>
                        <Card.Title>Text Summarization</Card.Title>
                        <Card.Text>
                        Get a quick summary of a given number of sentences for your data.
                        </Card.Text>
                        <Card.Link href="/worldofnlp/#/text_summary">Explore now</Card.Link>
                        </Card.Body>
                    </Card>

                </CardDeck>
                </div>
            </div>
      </div>
    )
 }
}
export default Home;
