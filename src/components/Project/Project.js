import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import './Project.scss';

class Project extends React.Component {
    render() {
        return (
            <Link to={`/project/${this.props.id}`} className="link-wrapper">
                <div className="project-frame">
                    <h3>{this.props.title}</h3>
                    <h5>{this.props.time}</h5>
                    <p>{this.props.description}</p>
                </div>
            </Link>
        );
    }
}

Project.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Project;