import React from 'react'
import Card from '../Card/Card'
import { readSync } from 'fs';

class Carrousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            loading: true
        }
    }

    async componentDidMount() {
        const siteId = this.props.match.params.siteId;
        const data = await fetch(`https://api.mercadolibre.com/sites/${siteId}/search?q=iphone&limit=5`);
        const result = await data.json();
        this.setState({
            result: result.results,
            loading: false
        }
        )
    }

    render() {
        const loading = this.state.loading

        return (
            <React.Fragment>
                {loading ? (
                    <p>Cargando... </p>
                ) : (
                        <div>
                            {this.state.result.map((result, key) => {
                                return <Card
                                    img={result.thumbnail}
                                    alt={result.title}
                                    title={result.title}
                                    text={result.price}
                                    key={key}
                                    currency={result.currency_id} />
                            })}
                        </div>

                    )}

            </React.Fragment>
        )
    }
}

export default Carrousel; 
