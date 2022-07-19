// MVP about me page, soon to be expanded

import React, { Component } from 'react';
import '../styles/about.scss';
import '../styles/footer.scss';
import realPic from '../img/robert1.jpg';
import animatedPic from '../img/robert2.jpg';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class About extends Component {
  render() {
    return (
        // what do i want people to know about me?
      <div id="aboutMeContainer">
        <div className="imageIntro">
            <div className="animatedImage">
                <img src={animatedPic} alt="animated coder" />
            </div>
            <div className="intro">
            <h5 className="helloWorld">
                Hello World!
            </h5>
            <p className="intro">
                My name is Robert Armstrong, I build things with JavaScript
            </p>
            <Button className="getInContact">
            Contact Me
            </Button>
            <div className="footer-icon-div">
            <span className="linkedIn">
                <FontAwesomeIcon icon = 'fa-brands fa-linkedin'/>
                <FontAwesomeIcon icon = 'fa-brands fa-github'/>
            </span></div>
            

            </div>
        
        </div>
        <div className="aboutPicture">
            <div className="aboutLong">
            <section className="about-me">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel sequi optio asperiores magnam placeat blanditiis animi, officiis nihil in harum. Quibusdam provident explicabo commodi quod delectus atque doloribus nobis possimus dicta natus sunt voluptates magnam hic minima non eos quo vero, incidunt distinctio praesentium corrupti, deleniti maxime. Dolore non, ex qui ducimus nemo placeat explicabo possimus ut ratione doloribus obcaecati? Magnam placeat quisquam animi molestias itaque unde libero odit quod cumque esse vitae, iusto dicta odio voluptatibus voluptas non totam natus fugiat quae delectus est officiis culpa. Laudantium distinctio dicta natus! Dolore, earum ab magnam nam aliquam sapiente at tenetur quis, nostrum dolorem error! Facere consectetur tenetur iusto aut nisi odio voluptates labore. Velit inventore aspernatur quisquam impedit vel perspiciatis facere quidem nam aperiam sequi? Eos repellat praesentium laborum laudantium. Doloribus cumque blanditiis eligendi quasi nisi. Officia nulla iste, assumenda nisi deleniti quam. Obcaecati consectetur et quia ratione impedit, rem tenetur ducimus fugiat, quasi doloremque blanditiis deserunt deleniti saepe consequatur inventore. Accusamus qui dicta officia alias, sequi sed. Numquam laboriosam laborum totam, magni ad culpa optio est, voluptatibus autem, ipsam dolorum rerum. Autem debitis nihil unde cupiditate fugiat ratione perspiciatis ducimus minima deleniti aspernatur placeat iure labore id, nesciunt impedit sed numquam sapiente fuga. Sunt corrupti, ullam veritatis optio iure, atque ratione tempora quam, quis distinctio tenetur. Nulla omnis libero quia perferendis ex maiores fuga, voluptatibus inventore tempora? Ducimus!
            </section>
            </div>
            <div className="realPic">
            <img src={realPic} alt="" className="realpic" />
            </div>
        </div>
      
       </div>
    )
  }
}
