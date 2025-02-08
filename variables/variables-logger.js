const mongoose = require('mongoose');

// Define the schema for "complexitylogs"
const complexityLogSchema = new mongoose.Schema({
    rt: Number,
    trial_type: String,
    trial_index: Number,
    time_elapsed: Number,
    internal_node_id: Number,
    subject: String,
    response: String,
    pic: String,
    stimulus: String,
    block: String,
    study_id: String,
    session_id: String,
});

// Create the model for "complexitylogs" collection
const ComplexityLog = mongoose.model('complexitylog', complexityLogSchema);

module.exports = ComplexityLog;
