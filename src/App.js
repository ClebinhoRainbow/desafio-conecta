import React, { Component } from "react";
import Home from "./components/home/home";
import "./assets/App.css";
import './assets/index.css';
import Produtos from "./components/main/produtos/produtos";
import Grid from "./components/main/grid/grid";
import Experimentar from "./components/footer/experimentar";
import FaleConosco from "./components/footer/faleconosco"
class App extends Component {


  render() {
    return (
      <body className="home">
        <Home/>
        <main>
          <Produtos/>
          <Grid/>
        </main>
        <footer>
          <Experimentar/>
          <FaleConosco/>
        </footer>
        
      </body>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
