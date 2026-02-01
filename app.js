const express = require("express");
const app = express();

app.get("/connected", (req, res) => {
    res.json({ status: "Service is running on Ubunutu Vm" })
});


app.get("/hello", (req, res) => {
    res.send("Hello from Ubuntu Node Microservice VM");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Microservice running on port 3000");
});
