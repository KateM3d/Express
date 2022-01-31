const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/style.css");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
    // console.log(req.method);//get
    // console.log(req.url); //resourse that the user is trying to access
    const url = req.url;
    console.log(url);
    //home page
    if (url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
        res.end();
    }
    // about page
    else if (url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>about page</h1>");
        res.end();
    }
    // styles
    else if (url === "/style.css") {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(homeStyle);
        res.end();
    }
    // logic
    else if (url === "/browser-app.js") {
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(homeLogic);
        res.end();
    }
    //404
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>page not found</h1>");
        res.end();
    }
});

server.listen(5000);