import React from 'react';
import './App.css';
import Card from './components/Card/Card'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      result: []
    }
  }

  async componentDidMount(){
    const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone');
    const result= await data.json();
    this.setState({
      result: result.results
    }    
    )
  }

  render() {
    console.log(this.state.result);
    return (
      <div className="App">
        <main className="App-header">

        <h1>Meli carrrousel</h1>

        <section>
          {this.state.result.map((result, key) => {
              return <Card img={result.thumbnail} alt={result.title} title={result.title} text={result.price} key={key}></Card>
          })}  
        </section>
        </main>
      </div>
    );
  }
}

export default App;
