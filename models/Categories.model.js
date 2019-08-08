var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BooksSchema = new Schema({
    isbn: String,
    title: String,
    subtitle: String,
    author: String,
    published: Date,
    publisher: String,
    pages: Number,
    description: String,
    image: String
});
var CategoriesSchema = new Schema({
    name: String,
    createdAt: Date,
    updatedAt: Date,
    booksCount: Number,
    availableBooksCount: Number,
    books: [BooksSchema]
});

const CategoriesModel = mongoose.model('Categories', CategoriesSchema);
const BooksModel = mongoose.model('Books', BooksSchema);
module.exports = { CategoriesModel: CategoriesModel, BooksModel: BooksModel }