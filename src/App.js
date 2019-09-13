import React from 'react';
import './App.css';
import Carrito from './components/Carrito/Carrito'
import Prueba from './components/Prueba/Prueba'
import Carrousel from './components/Carrousel/Carrousel'
import Individual from './components/Individual/Individual'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      result: []
    }
  }

   async componentDidMount(){
    const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=5');
    const result= await data.json();
    this.setState({
      result: result.results
    }    
    )
  } 

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/carrito" component={Carrito}/>
          <Route path="/prueba" component={Prueba}/>
          <Route path="/dinamica/:test" component={Individual}/>
        </Router>
       <main className="App-header">

        <h1>Meli carrrousel</h1>

        <section>
          <Carrousel atributes= {this.state.result} />
        </section>
        </main> 
      </div>
    );
  }
}

export default App;
