import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'react-router-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//Individual cards (t-shirt with quote) are where the API calls are actually done and stored, they're then rendered on the page as seprate units

export default class ShirtCard extends Component{



render() {
  return(
    <React.Fragment>
    <Card border='dark' bg='light'>
      <Card.Img variant='top' src='./shirtsmallerWquote.png'>
      </Card.Img>
      <Card.Body>
        <Card.Text>
          {this.props.quote}
        </Card.Text>
          <Button 
          size='lg' 
          variant='dark' 
          onClick={() => this.props.addToCart(this.props.quote)}>
            <i className="bi bi-bag-plus"></i> 
            Add to Cart
          </Button>
      </Card.Body>
    </Card>
    </React.Fragment>
  )
}


}