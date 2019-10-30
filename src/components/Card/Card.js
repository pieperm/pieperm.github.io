import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import './Card.scss';

class Card extends React.Component {
    render() {
        return (
            <Link to={this.props.link} className="link-wrapper">
                <div className="card-frame">
                    <h3>{this.props.title}</h3>
                    <h5>{this.props.time}</h5>
                    <p>{this.props.description}</p>
                </div>
            </Link>
        );
    }
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;