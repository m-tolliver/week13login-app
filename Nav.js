import React, {Component} from 'react'
import Navigation from './Nav'

function App() {
    return (
        <div className="App">
          <Navigation></Navigation>
        </div>
    )
}

export default class Nav extends Component {
    render() {
        return(
            <nav>
              <ul>
              
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
           
            </ul>
            </nav>
        )
    }
}