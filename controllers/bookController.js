const {Book} = require('../models')

//view all
module.exports.viewAll = async function (req, res) {
    const books = await Book.findAll();
    res.render('book/view_all', {books})
}
//profile
module.exports.viewProfile= async function(req, res) {
    const course = await Book.findByPk(req.params.id);
    res.render('book/profile', {Book})
}
//render add form

//add

//render edit form

//update

//delete