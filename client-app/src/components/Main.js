import React, { Component } from 'react'
import '../styles/main.scss'
import image from '../img/linuxy.png'
export default class Main extends Component {
  render() {
    return (
        <main>
        <div id = 'pic'>
        <img  src = {image} alt = 'coding challenge'/>
        </div>
        <div id = 'content'>
       <h1>
        Robert Armstrong 
       </h1>
       
       <h4>Software Developer</h4>
       <hr  style = {{width:'10rem'}}/>
       
       <section id = 'main-about-me-section'>
        <h4>
          A little About Me
        </h4>
    
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam neque laboriosam modi aliquid saepe ad reprehenderit, consequuntur nobis nam quasi possimus doloribus ut quis vel, fugiat iste laudantium assumenda quam molestias laborum, 
          sint labore itaque. Similique quasi tempora repellat aspernatur. Nisi voluptatum facilis esse libero porro odio iusto omnis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam neque laboriosam modi aliquid saepe ad reprehenderit, consequuntur nobis nam quasi possimus doloribus ut quis vel, fugiat iste laudantium assumenda quam molestias laborum, 
          sint labore itaque. Similique quasi tempora repellat aspernatur. Nisi voluptatum facilis esse libero porro odio iusto omnis.
        </p>
       </section>
        </div>
      </main>
    )
  }
}
