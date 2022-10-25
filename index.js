const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors());


const pages = require('./Data/pages.json');


app.get('/', (req, res) => {
    res.send(pages)
});

app.listen(port, () => {
    console.log(`Courses ${port}`);
})