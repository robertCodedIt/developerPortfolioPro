import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
     <nav>
        <ul className='menu'>
            <li><a href='http://localhost:3000/'>Home</a></li>
            <li><a href='http://localhost:3000/'>Pojects</a></li>
            <li><a href='http://localhost:3000/'>About</a></li>
            <li><a href='http://localhost:3000/'>Resume</a></li>
          
        </ul>
     </nav>
    )
  }
}
