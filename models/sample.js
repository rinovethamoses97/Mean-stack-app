var mongoose=require('mongoose');
var sampleSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    }
});
var sample=module.exports=mongoose.model('sample',sampleSchema);