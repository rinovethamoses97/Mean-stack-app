var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');
var mongoose=require('mongoose');

mongoose.connect('mongodb://rino:rino1234@ds261072.mlab.com:61072/contactapp');
mongoose.connection.on('connected',function(){
    console.log("Mongo Db connected");
});
mongoose.connection.on('error',function(err){
    if(err){
        console.log(''+err);
    }
});
var app=express();
const route=require('./routes/route');

app.use('/api',route);
app.use(cors());
app.use(bodyparser.json());

var http = require("http");
var server = http.createServer(app);
var port = Number(process.env.PORT || 3000);
server.listen(port);