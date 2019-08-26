import React from 'react';
import './App.css';
import Button from './components/Button/Button'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      FistNumber: '',
      SecondNumber: '',
      TotalNumber: ''
    }
  }

  handleClick() {
    const sum = this.state.FistNumber + this.state.SecondNumber;
    this.setState({
      TotalNumber: sum
    })
  }

  handleChange(e){
    const name = e.target.name;
    this.setState({
      [name]: parseInt(e.target.value)
    })
  }

  render() {
    return (
      <div className="App">
        <main className="App-header">

        <h1>Sumar números</h1>

          <input className="App-input" name="FistNumber" type="text" onChange={e => this.handleChange(e)}></input>
          <input className="App-input" name="SecondNumber" type="text" onChange={e => this.handleChange(e)}></input>

          <div onClick={() => { this.handleClick() }}>
            <Button text="Calcular" />
          </div>

          <h2 className="App-message">{this.state.TotalNumber}</h2>

        </main>
      </div>
    );
  }
}

export default App;
