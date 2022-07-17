const express = require("express");
const mongoose = require('mongoose');
const Document = require('./models/document');

const PORT = 3000
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

if (!DB_USER) {
    console.error('[error]: The "DB_USER" environment variable is required');
    process.exit(1);
}

if (!DB_PASS) {
    console.error('[error]: The "DB_PASS" environment variable is required');
    process.exit(1);
}

const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.gxenyiv.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('', (_req, res) => {
    // res.send({ msg: "dhrvu" });
    const code = `Welcome to WasteBin!
Use the commands in the top right corner
to create a new file to share with others.`

    res.render("code-display", { code, language: "plaintext" });
});


app.get('/new', (_req, res) => {
    res.render('new');
})

app.post('/save', async (req, res) => {
    const value = req.body.value;
    try {
        const document = await Document.create({ value });
        res.redirect(`${document.id}`);
    } catch (e) {
        console.log(e);
        res.render("new", { value });
    }
})

app.get("/:id/duplicate", async (req, res) => {
    const id = req.params.id
    try {
        const document = await Document.findById(id)
        res.render("new", { value: document.value })
    } catch (e) {
        res.redirect(`/${id}`)
    }
})

app.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const document = await Document.findById(id);
        res.render("code-display", { code: document.value, id })
    } catch (e) {
        console.log(e);
        res.render("/");
    }
});

app.listen(PORT);
