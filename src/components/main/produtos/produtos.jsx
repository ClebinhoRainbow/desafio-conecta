import React, { Component } from "react";
import  LataGuarana350  from "./img/garrafa350.png"
import  LataGuarana100  from "./img/garrafa100.png"
// import  lata_guarana_main  from "./img/lata_guarana_main.png"
// import {ReactComponent as LogoInsta} from "./img/instagram.svg"
// import {ReactComponent as LogoFace} from "./img/facebook.svg"

import "./estilo.css";
class Produtos extends Component{
 
 
  render(){
      return(
       <section>
           <section className="produtos">
                <h2>Produtos</h2>
                <p >Bacon ipsum dolor amet cow burgdoggen jowl, chuck flank<br/> ham boudin t-bone salami meatball sausage jerky turducken ball tip drumstick. </p>
                <ul className="tipos-guarana">

                    <li>   
                        <img className="" src={LataGuarana350} alt="Garrafa Guarana 350ml"/>
                        <div className="conteudo">
                        <h3>Garrafa 350ml</h3>
                        <p>Bacon ipsum dolor</p>
                        </div>
                        
                    </li>
                    <li>
                   
                   <img className="" src={LataGuarana100} alt="Garrafa Guarana 100ml"/>
                   <div className="conteudo">
                        <h3>Garrafa 100ml</h3>
                        <p>Bacon ipsum dolor</p>
                       
               
                   </div>
                    
                   </li>
                   
                </ul>
               <div className="butoes-sobrepostos">
               <a href='https://www.conectaai.com/'><button className="butao-cta">CallToAction</button></a>
                <a href='https://www.conectaai.com/'><button className="butao-cta">CallToAction</button></a>
               </div>
            </section>
       </section>
      );
  }
};

export default Produtos;