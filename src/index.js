require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");

// Sửa đổi ở đây: nhập toàn bộ module express-handlebars
const { engine } = require("express-handlebars");

const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// app.use(morgan("combined"));

// Sử dụng engine từ express-handlebars
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", "src/resources/views");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/search", (req, res) => {
    console.log(req.query);
    res.render("search");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
