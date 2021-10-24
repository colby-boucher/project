import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import About from './views/about';



export default class App extends Component {


  constructor(){
    super();

    this.state = {
      name: 'Colby Boucher',
      food: ['Pizza', 'Bannanas', 'Tabouli']
    }
  }

  render(){
    return (
      <div>
        <main className="contianer">
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => <Home name={this.state.name} food={this.state.food}/>}/>
            <Route path='/about' render={() => <About name={this.state.name}/>}/>
          </Switch>
        </main>
      </div>
    )
  }
}