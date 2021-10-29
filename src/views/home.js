import React, {Component} from 'react';
import ShirtCard from '../components/shirtcard';
import axios from 'axios';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default class Kanye extends Component {

  constructor(){
    super();
    this.state = {
      quotes: [],
    }

    this.bottom = React.createRef()

    this.observer = new IntersectionObserver(this.kanyeAPIdata)
    
  }

  kanyeAPIcall = async () => {
    let response = await axios.get(`https://api.kanye.rest/`);
    return response.data
  };

  kanyeAPIdata = async () => {
    for(let i = 0; i < 3; i++){
    let data = await this.kanyeAPIcall();
    data = data.quote;
    this.setState({quotes: [...this.state.quotes, data]});
    }
  }

  componentDidMount(){
    this.kanyeAPIdata();
    this.observer.observe(this.bottom.current)
  }


  render() {
    return (
      <section id='market'>
        {this.state.quotes.map(quote => (<ShirtCard quote = {quote} addToCart = {this.props.addToCart} />))}
        <div ref={this.bottom} > </div>
      </section>
    )
  }
}