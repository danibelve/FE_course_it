import React from 'react'
import './Card.css';

class Card extends React.Component {
    render() {
        return <article className="Card-container">
            <div className="Card-wrapper">
                <div className="Card-image">
                    <img src={this.props.img} alt={this.props.alt}></img>
                </div>
                <h3 className="Card-title">{this.props.title}</h3>
                <p>${this.props.text}</p>
            </div>
        </article>
    }
}

export default Card; 