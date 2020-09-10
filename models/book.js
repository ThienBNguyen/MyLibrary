const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  publishDate: {
    type: Data,
    required: true
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  coverImageName: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.schema.Types.ObjectId,
    required: true,
    ref: "Author"
  }
});

module.exports = mongoose.model("Book", bookSchema);
