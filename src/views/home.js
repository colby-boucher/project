import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render(){
    const name = this.props.name;
    let students = this.props.students;
    console.log(this.props.name)
    return (
      <div>
        <h1> Is this working? </h1>
        <p> The quick brown fox jumped</p>
      </div>
    )
  }

}