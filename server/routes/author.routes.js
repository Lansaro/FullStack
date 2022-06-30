const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post('/api/authors', AuthorController.createOne);
    app.get('/api/authors', AuthorController.viewAll);
    app.get('/api/authors/:id', AuthorController.viewOne);
    app.put('/api/authors/:id', AuthorController.updateOne);
    app.delete('/api/authors/:id', AuthorController.deleteOne);
}