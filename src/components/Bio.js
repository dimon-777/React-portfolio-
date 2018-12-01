import React, { Component } from 'react';
import avatar from '../images/avatar.png';

class Bio extends Component {
    render() {
        return(
        <div>
            <figure className="image is-256x256 is-centered">
                <img className="is-rounded" src={avatar} />
            </figure>
            <br />
            <p className="subtitle has-text-centered has-text-white is-size-2 is-uppercase"> Dmitriy Sedoy</p>
            <br />
            <div className="content">
                <blockquote className="has-text-black">The 33 y.o. web-developer. Live in Miami, FL. ...</blockquote>
            </div>
        </div>
        )
    }
}

export default Bio;