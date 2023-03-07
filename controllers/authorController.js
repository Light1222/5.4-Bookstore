const {Author} = require ('../models')

//view all
module.exports.viewAll = async function(req, res) {
    const authors = await Author.findAll();
    res.render('author/view_all', {authors});
}
//profile
module.exports.viewProfile = async function(req, res){
    const author = await Author.findByPk(req.params.id);
    res.render('author/profile', {author})
}
//render add

//add

//render edit
module.exports.renderEditForm = async function(req, res){
    const author = await Author.findByPk(req.params.id );
    res.render('author/edit', {author})
}
//edit

//delete

//update
module.exports.updateStudent = async function(req, res){
    const author = await Author.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
        book_written: req.body.book_written,

    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/authors/profile/${req.params.id}`);
}