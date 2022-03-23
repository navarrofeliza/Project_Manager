const Product = require("../models/product.models");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports = {
  getAll(req, res) {
    console.log("Here's all the available products!");
    Product.find()
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    console.log("Here's what's on sale.");
    Product.findById({ _id: req.params.id })
      .then(([name]) => {
        res.json([name]);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  create: function (req, res) {
    console.log("Add a product");
    Product.create(req.body)
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
      new: true,
    })
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    [Joke]
      .findOneAndDelete({ _id: request.params.id })
      .then(([name]) => {
        res.json([name]);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
