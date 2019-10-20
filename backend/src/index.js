const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

let projects = [];
let posts = [];

app.get('/projects', (req, res) => {
    const projs = projects.map(proj => ({
        id: proj.id,
        title: proj.title,
        description: proj.description,
        time: proj.time,
    }));
    res.send(projs);
});

app.post('/projects', (req, res) => {
    const { title, description, time } = req.body;
    const newProject = {
        id: projects.length + 1,
        title,
        description,
        time,
    };
    projects.push(newProject);
    res.status(200).send();
});

app.post('/projects/:id', (req, res) => {
    const project = projects.filter(proj => (proj.id === parseInt(req.params.id)));
    if (project.length > 1) return res.status(500).send();
    if (project.length === 0) return res.status(404).send();
    res.send(project[0]);
});

app.post('/projects/:id/delete', (req, res) => {
    const project = projects.filter(proj => (proj.id === parseInt(req.params.id)));
    if (project.length > 1) return res.status(500).send();
    if (project.length === 0) return res.status(404).send();
    projects = projects.filter(proj => (proj.id !== parseInt(req.params.id)));
    res.status(200).send();

});

app.get('/posts', (req, res) => {
    const psts = posts.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
    }));
    res.send(psts);
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});