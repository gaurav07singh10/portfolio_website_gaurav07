// jshint esversion6:

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("home.ejs")
})

app.get('/portfolio', (req, res) => {
  res.render("porfolio.ejs")
})

app.get('/contact', (req, res) => {
  res.render("contact.ejs")
})

app.get('/resume', (req, res) => {
  res.sendFile(__dirname + "/resume.docx")
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})

