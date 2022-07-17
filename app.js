const express = require("express");
const app = express()
const PORT = 3000

app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
    // res.send({ msg: "dhrvu" });
    res.render("code-display");
});

app.listen(PORT);
