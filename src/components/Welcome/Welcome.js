import React from 'react'
import { Link } from "react-router-dom";

class Welcome extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Link to="/carrousel/MLA">Argentina</Link>
                <Link to="/carrousel/MBO">Bolivia</Link>
                <Link to="/carrousel/MLB">Brasil</Link>
                <Link to="/carrousel/MCO">Colombia</Link>
            </React.Fragment>
        )
    }
}

export default Welcome; 