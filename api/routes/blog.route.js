// blog .route.js
const express = require('express');
const app = express();
const blogRoutes = express.Router();
// Require blog model in our routes module
let blogmodel=require('../models/blogmodel');
blogRoutes.route('/add').post(function (req, res) {
  let blog = new blogmodel(req.body);
    blog.save()
    .then(blog => {
      res.status(200).json({'blog':'blog has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
blogRoutes.route('/').get(function (req, res) {
  blogmodel.find(function (err, blogs){
    if(err){
      console.log(err);
    }
    else {
      res.json(blogs);
    }
  });
});

// Defined edit route
blogRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  blogmodel.findById(id, function (err,blog){
      res.json(blog);
  });
});

//  Defined update route
blogRoutes.route('/update/:id').post(function (req, res) {
  blogmodel.findById(req.params.id, function(err, blogmodel) {
    if (!blogmodel)
      res.status(404).send("Record not found");
    else {
      blogmodel.BlogTitle= req.body.BlogTitle;
      blogmodel.BlogDescription = req.body.BlogDescription;
      blogmodel.Author = req.body.Author;
      blogmodel.AuthorDescription=req.body.AuthorDescription

      blogmodel.save().then(blogmodel => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
blogRoutes.route('/delete/:id').get(function (req, res) {
    blogmodel.findByIdAndRemove({_id:req.params.id}, function(err,blog){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
module.exports = blogRoutes;