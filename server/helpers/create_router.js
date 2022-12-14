const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {
  const router = express.Router();

  router.get("/", function (req, res) {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.get("/:id", function (req, res) {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.post("/", function (req, res) {
    const newData = req.body;
    collection
      .insertOne(newData)
      //   .insertOneResult()
      //   .then((res) => findOne({ _id: res }))
      //   .then((doc) => res.json(doc.find().pretty()))
      //   .then((doc) => console.log(doc))
      .then((doc) => collection.findOne({ _id: doc.insertedId }))
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      // .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    collection
      // .updateOne({ _id: ObjectID(id) }, { $set: req.body })
      .updateOne({ _id: ObjectID(id) }, { $set: updateData })
      // .then(() => collection.find().toArray())
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  return router;
};

module.exports = createRouter;
