const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./data/courses.json');
const coursesDetails = require('./data/coursesDetails.json');

app.get('/', (req, res) => {
    res.send('Courses API Running')
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const coursesAll = coursesDetails.filter(c => c.id === id)
    res.send(coursesAll);
    // console.log(req.params.id);
})

app.listen(port, () => {
    console.log('Courses server running on port', port);
})