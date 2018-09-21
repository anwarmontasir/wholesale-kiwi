'use strict';

// import express
const express = require('express');

// call express() to create new app
const app = express();

// note that in memory JS is NOT normally how we serve state on the server,
// but we're simplifying here to get a sense of express basics.
let theCount = 0;

// this sets up a static file server that can serve assets from a public folder
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

//this endpoint sends back the current value of `theCount` which is an in-memory variable. 
// This function increments the count by 1 and then returns a JSON object of the form
// `{ "count": 12}`.
app.get("/the-count", (req, res) => {
    theCount ++;
    console.log(`the count is ${theCount}`);
    res.json({count: theCount});
});

// listen for requests and log when you've started listening
app.listen(process.env.PORT || 8080, () => console.log(
    `Your app is listening on port ${process.env.PORT || 8080}`
));
