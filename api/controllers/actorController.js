'use strict';
/*---------------ACTOR----------------------*/
var mongoose = require('mongoose'),
  Actor = mongoose.model('Actors');

exports.list_all_actors = function(req, res) {
    Actor.find({}, function(err, actors) {
        if (err){
          res.send(err);
        }
        else{
            res.json(actors);
        }
    });
};

exports.create_an_actor = function(req, res) {
  var new_actor = new Actor(req.body);
  console.log(new_actor);
  new_actor.save(function(err, actor) {
    if (err){
      res.send(err);
      console.log(err);
    }
    else{
      res.json(actor);
    }
  });
};

exports.read_an_actor = function(req, res) {
  Actor.findById(req.params.actorId, function(err, actor) {
    if (err){
      res.send(err);
    }
    else{
      res.json(actor);
    }
  });
};

exports.update_an_actor = function(req, res) {
    Actor.findOneAndUpdate({_id: req.params.actorId}, req.body, {new: true}, function(err, actor) {
      console.log(req.params.actorId);
        if (err){
            res.send(err);
        }
        else{
            res.json(actor);
        }
    });
};

exports.delete_an_actor = function(req, res) {
    Actor.remove({_id: req.params.actorId}, function(err, actor) {
        if (err){
            res.send(err);
        }
        else{
            res.json({ message: 'Actor successfully deleted' });
        }
    });
};

// Application
exports.list_all_applications = function(req,res) {
};

exports.create_application = function(req,res) {
};

exports.update_an_application = function(req,res) {
};

exports.delete_an_application = function(req,res) {
};

// Find trip
exports.find_trip = function(req,res) {
};

// Organize trip
exports.list_all_organized_trips = function(req,res) {
};

exports.organize_trip = function(req,res) {
};

exports.update_an_organized_trip = function(req,res) {
};

exports.delete_an_organized_trip = function(req,res) {
};

// Sponsorship
exports.list_all_sponsorships = function(req,res) {
};

exports.make_new_sponsorship = function(req,res) {
};

exports.update_an_sponsorship = function(req,res) {
};

exports.delete_an_sponsorship = function(req,res) {
};