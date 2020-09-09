const express = require("express");
const router = express.Router();
const Author = require("../models/author");
// all authors route
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new ReqExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find({ searchOptions });
    res.render("authors/index", { authors: authors, searchOptions: req.query });
  } catch {
    res.redirect("/");
  }
});
//New author route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});
// Create Author Route
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name
  });
  try {
    const newAuthor = await author.save();
    res.redirect(`authors`);
  } catch {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating Author"
    });
  }
  // author.save((err, newAuthor) => {
  //   if (err) {
  //     res.render("author/new", {
  //       author: author,
  //       errorMessage: "Error creating author"
  //     });
  //   } else {
  //     // res.redirect(`author/${newAuthor.id}`)
  //     res.redirect(`authors`);
  //   }
  // });
});
module.exports = router;
