const {Author, Book} = require ('../models')

//view all
module.exports.viewAll = async function(req, res) {
    const authors = await Author.findAll();
    res.render('author/view_all', {authors});
}
//profile
module.exports.viewProfile = async function(req, res){
    const author = await Author.findByPk(req.params.id, {
        include: 'books'
    });
    const books = await Book.findAll();
    let availableBooks = [];
    for (let i=0; i<books.length; i++){
        if (!authorHasBook(author, books[i])){
            availableBooks.push(books[i]);
        }
    }
    res.render('author/profile', {author, availableBooks})
}
//render add
module.exports.renderAddForm = function(req, res){
    const author = {
        first_name: '',
        last_name: '',
        dob: '',
    }
    res.render('author/add', {author})
}
//add
module.exports.addAuthor = async function(req, res){
    const author = await Author.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
    })
    res.redirect(`/authors/profile/${author.id}`)
}
//render edit
module.exports.renderEditForm = async function(req, res){
    const author = await Author.findByPk(req.params.id);
    res.render('author/edit', {author})
}
//edit

//delete
module.exports.deleteAuthor = async function(req, res){
    await Author.destroy({
        where: {
            id:req.params.id
        }
    })
    res.redirect('/authors')
}
//update
module.exports.updateAuthor = async function(req, res){
    const author = await Author.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob,

    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/authors/profile/${req.params.id}`);
}

function authorHasBook(author, book){
    for (let i=0; i<author.books.length; i++){
        if (book.id === author.books[i].id){
            return true
        }
    }
    return false
}

//add book to author
module.exports.addAuthor = async function (req, res) {

        await AuthorsBooks.create({
            author_id: req.params.authorId,
            book_id: req.body.book
        })
    res.redirect(`/authors/profile/${req.params.authorId}`)
}
