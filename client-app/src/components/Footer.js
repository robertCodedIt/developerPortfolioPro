import React, { Component } from 'react'
import '../styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Footer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first:null
    }
  }
  openLink=(link,user)=>{
    window.open(`https://${link}.com/${user}`,'newwindow','width=500 height=400');
    return false
  }
  render() {
    return (
      <footer>
      
<div className = 'footer-icon-div'>

<span onClick = {()=>{
  this.openLink('github','robertCodedIt');
}} ><FontAwesomeIcon icon = 'fa-brands fa-github' /></span>
<span onClick = {()=>{
  this.openLink('linkedin','in/robert-armstrong-codes');
}} ><FontAwesomeIcon icon = 'fa-brands fa-linkedin' /></span>




</div>
<div className="copy-right">
  <p>
    Robert Armstrong, Software Developer &copy; 2022
  </p>
</div>
 </footer>
    )
  }
}
