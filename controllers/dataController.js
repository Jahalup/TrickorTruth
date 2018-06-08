const db = require("../models");

// Defining methods for the Controller
module.exports = {
  findAll: function(req, res) {
    db.Trickortruth
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Trickortruth
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByZip: function(req, res) {
    db.Trickortruth
    .find({zipcode: req.params.zip}, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },
  create: function(req, res) {
    db.Trickortruth
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Trickortruth
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Trickortruth
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
