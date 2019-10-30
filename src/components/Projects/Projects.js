import React from 'react';
import axios from 'axios';
import './Projects.scss';
import Card from '../Card/Card';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: null,
        }
    }

    async componentDidMount() {
        const projects = (await axios.get('http://localhost:8081/projects')).data;
        this.setState({
            projects,
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Projects</h1>
                <div className="projects-container">
                    {this.state.projects === null ?
                        <p>Loading projects...</p> :
                        this.state.projects.map(proj => (
                            <Card key={proj.id}
                                  id={proj.id}
                                  link={`/project/${proj.link}`}
                                  title={proj.title}
                                  time={proj.time}
                                  description={proj.description}
                            />
                        ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Projects;