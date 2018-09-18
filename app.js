var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactlist');
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

app.listen(3000,function(){
    console.log("Server running in the port:3000");
});