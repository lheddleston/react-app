const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

/********* Middleware *********/
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/********* Routes + Controllers *********/
app.post('/app', (req, res) => {
    console.log('POST request sent to /app');
    if (error) {
        console.log('Error posting to app');
        res.status(400);
    }
    else {
        console.log('Posted to app');
        res.status(200);
    }
});

app.get('/app', (req, res) => {
    console.log('GET request sent to /app');
    if (error) {
        console.log('Error getting request');
        res.status(400);
    }
    else {
        console.log('Get request to app');
        res.status(200);
    }
});

/********* Start App *********/
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})