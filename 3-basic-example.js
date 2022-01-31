const express = require("express");
const app = express();
// another option:
// const app=require('express')();
app.get("/", (req, res) => {
    console.log("user hit the resource");
    res.status(200);
    res.send("Home page");
});

app.get("/about", (req, res) => {
    res.status(200);
    res.send("about page");
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>page not found</h1>");
});

app.listen(5000, () => {
    console.log("server is listening on port 5000...");
});
// app.get: app.get('path', callback)
// app.post
// app.put
// app.delete
// app.all -works with all of the methods
// app.use
// app.listen- listening for a port