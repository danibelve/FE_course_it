import React from 'react';
import './App.css';
import Carrito from './components/Carrito/Carrito'
import Prueba from './components/Prueba/Prueba'
// eslint-disable-next-line 
import Carrousel from './components/Carrousel/Carrousel'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      result: []
    }
  }

  /* async componentDidMount(){
    const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=5');
    const result= await data.json();
    this.setState({
      result: result.results
    }    
    )
  } */

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/carrito" Component={Carrito}/>
          <Route path="/prueba" Component={Prueba}/>
        </Router>
       {/*  <main className="App-header">

        <h1>Meli carrrousel</h1>

        <section>
          <Carrousel atributes= {this.state.result} />
        </section>
        </main> */}
      </div>
    );
  }
}

export default App;
