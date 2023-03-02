const {Book} = require('../models')
const genres = ['Action', 'Adventure', 'Comic', 'Comedy', 'Romance', 'Fantasy', 'Fiction', 'Non-Fiction'].sort();

//view all
module.exports.viewAll = async function (req, res) {
    const books = await Book.findAll();
    res.render('book/view_all', {books})
}
//profile
module.exports.viewProfile= async function(req, res) {
    const book = await Book.findByPk(req.params.id);
    res.render('book/profile', {book})
}
//render add form
module.exports.renderAddForm = function(req, res){
    const book = {
        title: '',
        authors: '',
        publisher: '',
        genre: 0,
        pages: '',
        image: '',
        description: '',

    }
    res.render('book/add', {book, genres});
}
//add
module.exports.addBook = async function(req, res){
    const book = await Book.create({
        title: req.body.title,
        authors: req.body.authors,
        publisher: req.body.publisher,
        genre: req.body.genre,
        pages: req.body.pages,
        image: req.body.image,
        description: req.body.description,
    });
    res.redirect(`/books/profile/${book.id}`);
}
//render edit form
module.exports.renderEditForm = async function(req, res){
    const book = await Book.findByPk(req.params.id);
    res.render('book/edit', {book, genres});
}
//update
module.exports.updateBook = async function(req, res){
    const book = await Book.update({
        title: req.body.title,
        authors: req.body.authors,
        publisher: req.body.publisher,
        genre: req.body.genre,
        pages: req.body.pages,
        image: req.body.image,
        description: req.body.description,
        }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/books/profile/${req.params.id}`)
}
//delete