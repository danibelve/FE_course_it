import React from 'react';
import './App.css';
import Title from './components/Title/Title'
import Card from './components/Card/Card'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.images = {
      web: {
        src: require('./assets/camara-web.png'),
        text: "imagen de camara web"
      },
      chat: {
        src: require('./assets/charlar.png'),
        text: "imagen de chat web"
      },
      apoyar:{
        src: require('./assets/apoyar.png'),
        text: "dos manos agarradas en señal de contribución"
      }
    }
  }
  render() {
    return (
      <main className="Main">
        <article className="Article">
          <div>
            <Title Title="Nuestros cursos y carreras"></Title>
          </div>
        </article>
        <article className="Article-Background">
          <Title Title="Nuestra propuesta de valor"></Title>
          <Card img={this.images.web.src} alt={this.images.web.text} title="Revivi cada clase" text="llalalalalal lalaalal lalaalal lalalal "></Card>
          <Card img={this.images.chat.src} alt={this.images.chat.text} title="Nunca perdes una clase" text="llalalalalal lalaalal lalaalal lalalal "></Card>
          <Card img={this.images.apoyar.src} alt={this.images.apoyar.text} title="Estás acompañado" text="llalalalalal lalaalal lalaalal lalalal "></Card>
        </article>
      </main>
    );
  }
}

export default App;
