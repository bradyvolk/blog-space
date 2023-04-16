const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const blogSchema = require("../models/Blog");

// Create
router.post("/create-blog", (req, res, next) => {
  blogSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
    console.log("Blog created successfully!");
  });
});

// Read
router.get("/", (req, res, next) => {
  blogSchema.find((error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
    console.log("Blogs read successfully!");
  });
});

// Update
router
  .route("/update-blog/:id")
  .get((req, res, next) => {
    blogSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      }
      res.json(data);
    });
  })
  .put((req, res, next) => {
    blogSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        }
        res.json(data);
        console.log("Blog updated successfully!");
      }
    );
  });

router.delete("/delete-blog/:id", (req, res, next) => {
  blogSchema.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    }
    res.status(200).json({
      msg: data,
    });
    console.log("Blog deleted successfully!");
  });
});

module.exports = router;
