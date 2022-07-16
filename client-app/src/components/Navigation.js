import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
     <nav>
        <ul className='menu'>
            <li><a href='/'>Home</a></li>
            <li><a href='https://devbyday.netlify.app/'>Pojects</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='https://devbyday.netlify.app/'>Resume</a></li>
          
        </ul>
     </nav>
    )
  }
}
