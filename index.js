var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://qruczbalu:mng90Qrc+RM4k@qurucbongo.axk6f.mongodb.net/?retryWrites=true&w=majority&appName=QurucBongo";

var DATABASENAME="project";
var db;

app.listen(5038,()=>{
    MongoClient.connect(CONNECTION_STRING,(error,client)=>{
        db=client.db(DATABASENAME);
        console.log("MongoDB Connected successfully");
    })
})

app.get('/api/cardealership/getcars',(request,response)=>{
    db.collection("cars").find({}).toArray((error,result)=>{
        response.send(result);
    })
})