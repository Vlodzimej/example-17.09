const { join } = require('path');
const express = require('express');
const { getSliced } = require('./utils');
const { data } = require('./data.js');

const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/list', (req, res) => {
    console.log(req.query);

    const { count } = req.query;

    const sliced = getSliced(data, count);


    res.send(sliced);
});

app.listen(3000, () => console.log('port 3000'));
