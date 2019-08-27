import React from 'react'
import Dots from '../Dots/Dots'
import './Title.css'

class Title extends React.Component {
    render() {
        return (
            <div className="Headings-container">
                <h2 className="Headings_2">
                    {this.props.Title}
                </h2>
                <Dots></Dots>
            </div>
        )
    }
}

export default Title;