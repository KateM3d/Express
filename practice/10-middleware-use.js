//middlewar

const express = require("express");
const app = express();
const logger = require("./logger");
//req=>middlewar=>res
// app.use(logger);
// we can also add a path then it will be applied only to the methods with that path
app.use("/api", logger);

app.get("/", (req, res) => {
    res.status(200).send("<h2>Home</h2>");
});
app.get("/about", (req, res) => {
    res.status(200).send("<h2>About</h2>");
});
app.get("/api/products", (req, res) => {
    res.status(200).send("<h2>products</h2>");
});
app.get("/api/items", (req, res) => {
    res.status(200).send("<h2>items</h2>");
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});