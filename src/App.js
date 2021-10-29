import './App.css';
import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table'
import CloseButton from 'react-bootstrap/CloseButton'
import 'react-router-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './views/home';
import About from './views/about';
import Cart from './views/cart';
import { NavItem, OffcanvasBody } from 'react-bootstrap';



export default class App extends Component {


  constructor(){
    super();

    this.state = {
      cart: [],
      totalquanity: 0,
      totalprice: 0,
      open: false
    }
    this.addToCart = this.addToCart.bind(this);
  }

  //personal note: 'shirt' in this function is the current object that is being mapped over
  addToCart(currentquote) {
    let cart = this.state.cart

    if ( typeof(cart.find(shirt => shirt.quote===currentquote)) === 'undefined'){
      this.setState({cart: [...this.state.cart, {"quantity":1, "quote":currentquote, "price":20}]})
      this.setState({totalquanity: this.state.totalquanity + 1})
      this.setState({totalprice: this.state.totalprice + 20})
    }
    else{
      let workingcart = cart.map(shirt => {
        if (shirt.quote === currentquote){
          return {quantity: shirt.quantity + 1, quote: shirt.quote, price:shirt.price + 20}
        }
        else {
          return shirt
        }
      });
      this.setState({cart: workingcart})
      this.setState({totalquanity: this.state.totalquanity + 1})
      this.setState({totalprice: this.state.totalprice + 20})
    }
  }

  pullFromCart(currentquote){
    let cart = this.state.cart
    cart.splice((cart.findIndex(item => item.quote === currentquote)), 1);
    this.setState({cart: [...this.state.cart, cart]})
    this.setState({totalquanity: this.state.totalquanity - 1})
    this.setState({totalprice: this.state.totalprice - 20})
  }

  handleShow = () => this.setState({open:true});
  handleHide = () => this.setState({open:false});

  render(){
    console.log(this.state);
    return (
      <div>
        <Container>
        <Stack gap={5}>
          <Navbar bg="dark" variant="dark" sticky="top" >
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>
                <img
                alt="Ye"
                src="./Ye.png"
                width="27"
                height="40"
                className="d-inline-block align-top"
                />{' '}
                ye-shirts
                </Navbar.Brand>
              </LinkContainer>
              <Nav>
                <LinkContainer to='About'>
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={this.handleShow}><i className="bi bi-bag"></i> ({this.state.totalquanity})</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path='/' render={() => <Home addToCart = {this.addToCart}/>}/>
            <Route path='/about' render={() => <About />}/>
          </Switch>
          <Offcanvas show={this.state.open} onHide={this.handleHide} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Table responsive='sm'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Quantity</th>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.cart.map(item => {
                    return <tr key={item.quote}>
                    <td><CloseButton onClick={() =>this.pullFromCart(item.quote)}></CloseButton></td>
                    <td>{item.quantity}</td>
                    <td >{item.quote}</td>
                    <td>${item.price}</td>
                    </tr>
                })
                }
                <tr>
                  <th>Total: ${this.state.totalprice}</th>
                </tr>
                </tbody>
              </Table>
            </Offcanvas.Body>

          </Offcanvas>
          </Stack>
        </Container>
      </div>
    )
  }
}