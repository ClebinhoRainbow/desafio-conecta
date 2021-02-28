import React, { Component } from "react";

import  Grid1  from "./img/grid1.png";
import  Grid2  from "./img/grid2.png";
import  Grid3  from "./img/grid3.png";
import {ReactComponent as SVG} from "./img/retangulo.svg"
// import {Carrousel} from "./carrousel/carrousel"


import "./estilo.css";
class Grid extends Component{
 
   
  render(){
      return(
       <section>
           <section className="grid-section">
                <div className="parent">
                    <div className="div1">
                        <img src={Grid1}alt="grupo de meninas em uma festa"></img> 
                    </div>
                    <div className="div2"> 
                    <p>Bacon ipsum dolor</p>
                    <img></img>
                    </div>
                    <div className="div3">
                    <img src={Grid3}alt="Barman servindo bebida"></img> 
                    </div>
                </div>
            </section>
       </section>
      );
  }
};

export default Grid;