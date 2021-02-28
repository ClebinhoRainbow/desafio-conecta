import React, { Component } from "react";
import  lata_guarana_main  from "./img/lata_guarana_main.png"

import {ReactComponent as LogoConecta} from './img/marca_conecta_header.svg';
import {ReactComponent as LogoInsta} from "./img/instagram.svg"
import {ReactComponent as LogoFace} from "./img/facebook.svg"


import "./estilo.css";
class Home extends Component{
 
 
  render(){
      return(
       <section>
         
            <header className="background-main">
           
           <div className="container">
               <div className="logo">
                
                    <LogoConecta/>
                
            </div>
            <nav className='menu-header'>
                <ul>
                   <li><a href='https://www.facebook.com/conectaai.oficial/?__tn__=%2Cg' alt="link facebook"></a><LogoFace/></li>
                   <li><a href='https://lm.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fconecta.oficial%2F%3Ffbclid%3DIwAR14RoOZOCc4K1c7VAXhmTLc4Y8EHOv7ZO9erfcWNiy_U3tYXZ9KSGfoZHg&h=AT3saCv-zqQwg7y4qpvkHVTu_KdOgKcaYLNOBoMB7SWs1Htdk4jrkJ8ivAbBvcEWKgChpGvGMtRLieUeb7JABnatEMx--sycV3ZmmuIpURxkIDLrE7EZlI6YmOlVm1P51tJCZu3BYgWa2I6TLJnRj_xh' alt="link instagram"><LogoInsta/></a></li>   
                </ul>
            </nav>
               
           </div>
           <div className="container-header-meio">
                <img className="lata-guarana-main" src={lata_guarana_main} alt="Lata de guarana"/>
                <div className="container-cta">
                    <h2> Acessa o site da conecta<br/> clickando no botao abaixo</h2>
                    <a href='https://www.conectaai.com/'><button className="butao-cta">CTA</button></a>
                </div>
           </div>
      </header>   
       
       </section>
      );
  }
};

export default Home;