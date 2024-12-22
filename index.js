var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://qruczbalu:Fortress2@qurucbongo.rhkzh.mongodb.net/?retryWrites=true&w=majority&appName=QurucBongo";

