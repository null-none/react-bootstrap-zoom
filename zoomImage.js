import React, {Component} from 'react';
import {Image} from 'react-bootstrap';

import "./zoom.css";

export default class ZoomImage extends Component {
    render() {
        return (
          <ul className="list-inline gallery">
            <li><Image responsive className="zoom" src={this.props.src} /></li>
          </ul>
        );
    }
}
