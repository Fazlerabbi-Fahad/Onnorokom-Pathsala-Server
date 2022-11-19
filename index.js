const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())


const courses = require('./Data/courses.json');
const classes = require('./Data/classes.json');


app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/course', (req, res) => {
    res.send(classes)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;

    const courseClass = classes.filter(c => c.course_id === id);
    res.send(courseClass)


})


app.listen(port, () => {
    console.log(`Courses ${port}`);
})