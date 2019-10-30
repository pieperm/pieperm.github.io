import React from 'react';
import axios from 'axios';
import './Project.scss';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
        }
    }

    async componentDidMount() {
        const {match: { params }} = this.props;
        const project = (await axios.get(`http://localhost:8081/project/${params.id}`)).data;
        this.setState({
            project,
        })
    }

    render() {
        return (
            this.state.project === null ?
                <p>Loading...</p> :
                <React.Fragment>
                    <h1>{this.state.project.title}</h1>
                    <h3>{this.state.project.time}</h3>
                </React.Fragment>
        );
    }
}

export default Project;