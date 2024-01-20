import React, {Component} from 'react'
import Navigation from './Nav'



let date = new Date()

let singleUser = {
  name: 'Jane',
  time: date.toDateString(),
}

export default class Section extends Component {
    render() {
        return(
            <section>
            <h1>Login {singleUser.name}</h1>
            <p>Username {singleUser.time}</p>
            <p>Password</p>
            </section>  
        )
    }
}