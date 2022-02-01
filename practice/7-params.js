const express = require("express");
const { products } = require("./data");
const app = express();
app.get("/", (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});
//get request set up. sending back json with list of items without description
app.get("/api/products", (req, res) => {
    const newProduct = products.map((product) => {
        const { id, image, name } = product;
        return { id, name, image };
    });
    res.json(newProduct);
});

// get info only for 1st product with id=1
// app.get("/api/products/1", (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1);
//
//     res.json(singleProduct);
// });

//route parametrs. we can use instead of setting each route separately
app.get("/api/products/:productID", (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );
    if (!singleProduct) {
        return res.status(404).send("Product is not found"); //if product doesn't exist
    }

    res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
    console.log(req.params);
    res.send("hello word");
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});