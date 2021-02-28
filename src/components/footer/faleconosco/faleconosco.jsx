import React, { Component } from "react";
// import  lata_guarana_main  from "./img/lata_guarana_main.png"

import {ReactComponent as LogoConecta} from "./img/marca_conecta_header.svg";
import {ReactComponent as LogoInsta} from "./img/instagram.svg"
import {ReactComponent as LogoFace} from "./img/facebook.svg"

import "./estilo.css";
class FaleConosco extends Component{
 
 
  render(){
      return(
       <section>
         
         <div className="fale-conosco">
           {/*todo handler*/}
           <div className="esquerda">
             <h2>Fale Conosco</h2>
             <div className="social-media-esquerda">
             <a href='https://www.facebook.com/conectaai.oficial/?__tn__=%2Cg' alt="link facebook"></a><LogoFace/>
             <a href='https://lm.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fconecta.oficial%2F%3Ffbclid%3DIwAR14RoOZOCc4K1c7VAXhmTLc4Y8EHOv7ZO9erfcWNiy_U3tYXZ9KSGfoZHg&h=AT3saCv-zqQwg7y4qpvkHVTu_KdOgKcaYLNOBoMB7SWs1Htdk4jrkJ8ivAbBvcEWKgChpGvGMtRLieUeb7JABnatEMx--sycV3ZmmuIpURxkIDLrE7EZlI6YmOlVm1P51tJCZu3BYgWa2I6TLJnRj_xh' alt="link instagram"><LogoInsta/></a>
             <h3> | REDES SOCIAIS</h3>
             </div>
           </div>
         <form /*onSubmit={this.handleSubmit}*/ >
            <label>
                  
                  <p>NOME:</p>
                  <input type="text" placeholder="Nome Completo"
                  size="40" />
            </label>
            <div className="phone-n-mail">
            <label>
                  <p>TELEFONE:</p>
                  <input type="text"  placeholder="(DDD)00000-0000" size="15"/>
            </label>
            <label>
                  <p>E-MAIL:</p>
                  <input type="email"  placeholder="email@email.com"size="17"/>
            </label>
            </div>
            <p>ASSUNTO:</p>
            <select >
              <option selected value="">Conecta</option>
              <option value="">&</option>
              <option  value="">Cledson</option>
              <option value="">4ever</option>
            </select>
            <p>MENSSAGEM</p>
            <textarea rows="10">
           
            </textarea>

           <div className="botao-aux">
           <a href='https://www.conectaai.com/'><button className="butao-cta-footer">Aqui outra call</button></a>
           </div>
        </form>
        
            
        
         </div>
         <div className="fim-footer">
        <p>Todos os direitos reservador &copy; 2020 Conecta</p>
        <h5>PROJETADO POR<LogoConecta className="loguinhoconecta"/></h5>
        </div>
       
       </section>
      );
  }
};

export default FaleConosco;