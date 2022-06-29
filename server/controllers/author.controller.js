const Author = require('../models/author.model');

const createOne = (req, res) => {
    Author
        .create(req.body)
        .then((newAuthor) => {res.json(newAuthor)})
        .catch((err) => res.status(400).json(err));
}

const viewAll = (req, res) => {
    Author
        .find()
        .then((allAuthors) => {res.json(allAuthors)})
        .catch((err) => res.status(400).json(err));
}

const viewOne = (req, res) => {
    Author
        .findOne({_id: req.params.id})
        .then((author) => {res.json(author)})
        .catch((err) => res.status(400).json(err));
}

const updateOne = (req, res) => {
    Author
        .updateOne({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedAuthor) => {res.json(updatedAuthor)})
        .catch((err) => res.status(400).json(err));
}

const deleteOne = (req, res) => {
    Author
        .deleteOne({_id: req.params.id})
        .then((mongooseResponse) => res.json(mongooseResponse))
        .catch((err) => res.status(400).json(err));
}

module.exports = {
    createOne,
    viewAll,
    viewOne,
    updateOne,
    deleteOne
}