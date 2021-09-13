const mongoose = require("mongoose");

const phaseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tasks: {
        type: Array,
        default: []
    },
    parent: {
        type: String,
        ref: 'Phase'
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }
});

module.exports = mongoose.model("Phase", phaseSchema);
