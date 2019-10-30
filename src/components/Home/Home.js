import React from 'react';
import axios from 'axios';
import './Home.scss';
import Card from '../Card/Card';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: null,
            posts: null,
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
                                <Card key={proj.id}
                                      id={proj.id}
                                      link={`/projects/${proj.id}`}
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
                        {this.state.posts === null ?
                            <p>Loading projects...</p> :
                            this.state.posts.map(post => (
                                <Card key={post.id}
                                      id={post.id}
                                      link={`/posts/${post.id}`}
                                      title={post.title}
                                      time={post.time}
                                      description={post.description}
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