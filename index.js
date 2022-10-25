const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors());


const pages = require('./Data/pages.json');
const courses = require('./Data/courses.json');


app.get('/', (req, res) => {
    res.send('pages')
});

app.get('/pages', (req, res) => {
    res.send(pages)
});

app.get('/pages/course', (req, res) => {
    res.send(courses)
})


app.listen(port, () => {
    console.log(`Courses ${port}`);
})