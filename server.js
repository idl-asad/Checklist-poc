// server.js
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/connection");
const jwt = require('./middlewares/jwt');
const errorHandler = require('./middlewares/errorHandler');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
 res.send("Hello from Checklist server!");
});

app.use(jwt());

// api routes
app.use('/api', require('./api/routes'));

// global error handler
app.use(errorHandler);


db().then(() => {
    console.log("Connected successfully to Checklist database!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log(`Listening on ${port}!`);
});
