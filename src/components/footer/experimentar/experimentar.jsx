import React, { Component } from "react";
import  Lata1  from "./img/lata1.png";
import  Lata2  from "./img/lata2.png";
import  Lata3  from "./img/lata3.png";

// import {ReactComponent as LogoConecta} from './img/marca_conecta_header.svg';
// import {ReactComponent as LogoInsta} from "./img/instagram.svg"
// import {ReactComponent as LogoFace} from "./img/facebook.svg"

import "./estilo.css";
class Experimentar extends Component{
 
 
  render(){
      return(
       <section >
          <div className="imagens-emcima">
             <img src={Lata1}></img>
          </div>
           <div className="container-experimentar">
                <h2>Quer Experimentar?</h2>
                <a href='https://www.conectaai.com/'><button className="butao-cta-preto">Aqui um CTA</button></a>
           </div>
           <div  className="imagens-embaixo">
                
                <img src={Lata2} className="lata-menor"></img>
                
                 
                 <img src={Lata3} className="lata-maior"></img> 
                 
           </div>
         
        
       
       </section>
      );
  }
};

export default Experimentar;