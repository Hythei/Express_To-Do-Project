const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// All of the publically accessible and viewable HTML-files are stored in the Public-folder and this makes it somewhat easier to send them as responses when necessary.
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
     console.log(`App is running on port: ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public","index.html"));
});

app.get("/tasks", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "tasks.html"));
});