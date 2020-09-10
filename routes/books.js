const express = require("express");
const router = express.Router();
const book = require("../models/book");
const Author = require('../models/author')
// All Books Route

router.get("/", async (req, res) => {
  res.send("All books");
});

//new Book Route
router.get("/new", (req, res) => {
 try{
const authors = await Authors.find({})
const book = new book()
res.render('/book/new',{
    authors: authors,
    book: book
})
 }catch{
res.redirect('./books')
 }
});

//create book route
res.send("All books");
router.post("/", async (req, res) => {});

module.exports = router;
