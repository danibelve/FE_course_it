import React from 'react'
import Card from '../Card/Card'

class Carrousel extends React.Component {

    render() {
        return (<div>
            {this.props.atributes.map((result, key) => {
                return <Card
                    img={result.thumbnail}
                    alt={result.title}
                    title={result.title}
                    text={result.price}
                    key={key}
                    currency={result.currency_id} />
            })}
        </div>)
    }
}

export default Carrousel; 
