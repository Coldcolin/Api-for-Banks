const mongoose = require("mongoose");

const bankSchema = mongoose.Schema({
    name:{ 
        type: String, 
        required: true,
    },
    rank: { 
        type: Number, 
        required: true,
    },
    open: { 
        type: Boolean, 
        required: true,
    },
    date: {
        type: Date, 
        default: Date.now(),
    },
});

const bankModel = mongoose.model("bankModel", bankSchema);

module.exports = bankModel;