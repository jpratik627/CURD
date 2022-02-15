const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    
    task: {
        type: String,
        required: true
    },

    description: {
        type: Boolean,
        required: true,
        default: false
    }

});

module.exports = mongoose.model('Task', taskSchema);
