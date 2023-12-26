const express = require("express");
const app = express();
const port = 8001;

app.get("/", (req, res) => {
    res.send("m nhìn cái chóa gì!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
