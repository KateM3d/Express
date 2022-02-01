//middlewar

const express = require("express");
const app = express();

//req=>middlewar=>res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.methodconst;
    const time = new Date().getFullYear();
    console.log(method, url, time);

    //we have to send back our own response or next()-pass it to the next method
    next();
};

app.get("/", logger, (req, res) => {
    res.status(200).send("<h2>Home</h2>");
});
app.get("/about", logger, (req, res) => {
    res.status(200).send("<h2>About</h2>");
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});