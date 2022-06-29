const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post('/api/pets', AuthorController.createAuthor);
    app.get('/api/pets', AuthorController.getOneAuthor);
    app.get('/api/pets/:id', AuthorController.getAllAuthors);
    app.put('/api/pets/:id', AuthorController.updateAuthor);
    app.delete('/api/pets/:id', AuthorController.deleteAuthor);
}