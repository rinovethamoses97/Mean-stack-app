var mongoose=require('mongoose');

var contactSchema=mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    phone:{
        type:String,
        required: true
    }

});
var contacts= module.exports=mongoose.model('contact',contactSchema);