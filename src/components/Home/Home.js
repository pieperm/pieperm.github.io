import React from 'react';
import axios from 'axios';
import Project from "../Project/Project";
import './Home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: null,
        }
    }

    async componentDidMount() {
        const projects = (await axios.get('http://localhost:8081/projects')).data;
        console.log(projects);
        this.setState({
            projects,
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Michael Pieper</h1>

                <div className="preview-section">
                    <h2>Projects</h2>
                    <div className="projects-container">
                        {this.state.projects === null ?
                            <p>Loading projects...</p> :
                            this.state.projects.map(proj => (
                                <Project key={proj.id}
                                         id={proj.id}
                                         title={proj.title}
                                         time={proj.time}
                                         description={proj.description}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="preview-section">
                    <h2>Posts</h2>
                    <div className="posts-container">
                        {this.state.projects === null ?
                            <p>Loading projects...</p> :
                            this.state.projects.map(proj => (
                                <Project key={proj.id}
                                         id={proj.id}
                                         title={proj.title}
                                         time={proj.time}
                                         description={proj.description}
                                />
                            ))
                        }
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Home;