const { default: mongoose, Schema } = require("mongoose");

const noteSchema=new Schema({
    title:{
        type:String,
        require:true
    },
      content:{
        type:String,
        require:true
    }
},
{
    timestamps:true
}
);


const Notes=mongoose.model("note",noteSchema);
module.exports= Notes;