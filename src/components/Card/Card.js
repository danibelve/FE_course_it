import React from 'react'

class Card extends React.Component{
    render(){
        return <div className="Card-container">
            <div>
                <img src={this.props.img} alt={this.props.alt}></img>
            </div>
            <h3>{this.props.title}</h3>
            <p>{this.props.text}</p>
        </div>
    }
}

export default Card;