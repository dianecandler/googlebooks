const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Set up table - Mongoose schema
const bookSchema = new Schema({
  id: { type: Number},
  title: { type: String},
  authors: { type: String},
  description: { type: String},
  image: { type: String},
  link: { type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;