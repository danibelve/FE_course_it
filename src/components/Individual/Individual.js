import React from 'react'

class Carrito extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>Mi ruta dinamica es {this.props.match.params.test}</h1>)
    }
}

export default Carrito; 