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
  update: function(req, res) {
    db.Trickortruth
      .findManyAndUpdate({"firstname": req.params.userfirstname}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
  getUser: function(req, res) {
    db.Trickortruth
      .findOne({firstname: req.params.usernm})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByZip: function(req, res) {
    db.Trickortruth
    .find({zipcode: req.params.zip, treats: req.params.treat}, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },
  findByPeanut: function(req, res) {
      db.Trickortruth
      .find({zipcode: req.params.peanut, peanutfree: req.params.yeso, treats:req.params.treat}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },  
    // findByPeanut: function(req, res) {
    //   db.Trickortruth
    //   .find({healthy: req.params.yesh, zipcode: req.params.healthyzip, treats: req.params.treats}, req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
    // },  
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
