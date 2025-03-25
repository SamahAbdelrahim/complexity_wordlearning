require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const ComplexityVid = require('./variables/variables-vid-logger.js');

const app = express();
const port = process.env.PORT || 3010;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the "experiment" directory
app.use(express.static(path.join(__dirname, 'video_experiment')));

// Set up a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'video_experiment', 'complexity_videos.html'));
});

// MongoDB connection
let raw_data = fs.readFileSync('mongo_auth.json');
let auth = JSON.parse(raw_data);
let mongoDBUri = `mongodb://${auth.user}:${auth.password}@127.0.0.1:27017/samah?authSource=admin`;

// MongoDB
mongoose.connect(mongoDBUri)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Logging
app.post('/api/log', (req, res) => {
    console.log("req.body");
    try {
        console.log(req.body);
    } catch (error) {
        console.error('Error in POST request:', error);
        res.status(500).send('Internal Server Error');
    }
    const { rt, trial_type, trial_index, time_elapsed, internal_node_id, subject, response, pic, stimulus, block, study_id, session_id } = req.body;

    const newLog = new ComplexityVid({ rt, trial_type, trial_index, time_elapsed, internal_node_id, subject, response, pic, stimulus, block, study_id, session_id });

    newLog.save()
        .then(() => res.send('Action logged successfully'))
        .catch(err => res.status(500).send('Error logging action: ' + err.message));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
