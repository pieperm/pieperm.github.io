const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const projects = [];

app.get('/', (req, res) => {
    const projs = projects.map(proj => ({
        id: proj.id,
        title: proj.title,
        description: proj.description,
        time: proj.time,
    }));
    res.send(projs);
});

app.post('/', (req, res) => {
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

app.get('/:id', (req, res) => {
    const project = projects.filter(proj => (proj.id === parseInt(req.params.id)));
    if (project.length > 1) return res.status(500).send();
    if (project.length === 0) return res.status(404).send();
    res.send(project[0])
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});