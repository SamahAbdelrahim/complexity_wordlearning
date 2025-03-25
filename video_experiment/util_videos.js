// Define the function globally
function logExpData1(data) {
    console.log("utils data")
    // //console.log(data)
    console.log("data.session_id");
    console.log(data.session_id);
    const logData = {
        rt: data.rt,
        trial_type: data.trial_type,
        trial_index: data.trial_index,
        time_elapsed: data.time_elapsed,
        internal_node_id: parseFloat(data.internal_node_id), // Parse string to number
        subject: data.subject_id,
        response: JSON.stringify(data.response),
        pic: data.pic, 
        block: data.block,
        study_id: data.study_id,
        stimulus: data.stimulus, 
        session_id: data.session_id,
    };

    return fetch('/api/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error logging action:', error));
}

// Make it available globally
window.logExpData1 = logExpData1;
console.log("logExpData1 function loaded and available globally");
