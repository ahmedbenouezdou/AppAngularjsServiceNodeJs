"use strict";



var nodeCouchDB = require("node-couchdb");
var couch = new nodeCouchDB("localhost", 5984);

var nano   = require('nano')('http://localhost:5984/')
    , db     = nano.use('datanadsjs');

exports.getAll = function (req, res) {


    db.get('datanadsjs', { }, function(err, body) {
        if (!err)
            console.log(body);
    });



};


exports.getId = function (req, res) {

};


exports.postAdd = function (req, res) {
    console.log("dans le body il y a ca");
    console.log(req.body.data);
    try{
        //gestion des clés auto
        nano.db.insert(req.body.data, function(err, body) {
            if (!err){
                res.send(body);
            }else{
                console.log(err);
            }

        });
    }catch(err){
        console.log("Error: " + err );
    }


};


exports.putUpdate = function (req, res) {
    console.log("dans le body il y a ca");
    console.log(req.body.data);
};

exports.removeDoc = function (req, res) {
console.log(req.param.id);
    try{
        db.destroy( req.param.id, function(err, body) {
            if (!err)
                console.log(body);
        });
    }catch (err) {
        console.log("Error: " + err );
    }

};