var mongoose = require('mongoose');

var batches = new mongoose.Schema({
    name:
    {
        type:String,
        required: "Required"
    },
    fees:{
        type:String,
        required: "Required"
    }
});

mongoose.model("marvellous",batches);