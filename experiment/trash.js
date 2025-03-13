
const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData('csv');
      }
  });

// Define global variables
const prolificCompletionURL = "https://app.prolific.com/submissions/complete?cc=XXXX";

// Helper function: Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Preload images dynamically
const imageFolder = "img/stimuli";
const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
shuffleArray(images);
const imagePaths = images.map(img => `${imageFolder}/${img}`);

// Define experiment timeline
const timeline = [];

// Instructions
const instructions = {
    type: "html-button-response",
    stimulus: "<p>Welcome to the experiment!</p><p>Click 'Next' to begin.</p>",
    choices: ["Next"]
};
timeline.push(instructions);

// Trial structure
const trials = images.map(img => {
    return {
        type: "image-button-response",
        stimulus: img,
        choices: ["Option 1", "Option 2"],
        on_finish: function(data) {
            logExpData(data);
        }
    };
});

// Add trials to timeline
timeline.push(...trials);

// Logging function
async function logExpData(trialData) {
    try {
        await fetch("/log", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(trialData)
        });
    } catch (error) {
        alert("Data logging failed. Please check your connection.");
    }
}

// End screen with Prolific redirect
timeline.push({
    type: "html-button-response",
    stimulus: "<p>Thank you for participating!</p>",
    choices: ["Complete"],
    on_finish: function() {
        window.location.href = prolificCompletionURL;
    }
});

// Initialize experiment
jsPsych.init({
    timeline: timeline,
    on_finish: function() {
        console.log("Experiment completed.");
    }
});


jsPsych.run(timeline)


// var feedback_trial = {
//     type: jsPsychHtmlButtonResponse,
//     stimulus: function() {
//         var last_trial = jsPsych.data.getLastTrialData().values()[0];
//         var response = last_trial.response;
//         var item = practice_image_data.find(img => img.stimulus === last_trial.pic);
//         var isCorrect = (item.correct_above !== undefined && response > item.correct_above) ||
//                         (item.correct_below !== undefined && response < item.correct_below);

//         return isCorrect
//             ? `<p style='color:green; font-size:20px;'>✅ Correct! ${
//                 item.correct_above !== undefined 
//                 ? "Slide above " + item.correct_above + " for complex objects."
//                 : "Slide below " + item.correct_below + " for simple objects."
//             }
//             </p>`
//             : `<p style='color:red; font-size:20px;'>❌ Oops! ${
//                 item.correct_above !== undefined 
//                 ? "Slide above " + item.correct_above + " for complex objects."
//                 : "Slide below " + item.correct_below + " for simple objects."
//             } </p>`;
//     },
//     choices: ["Next"]
// };


var practice_demo = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: function() {
                var stimulus = jsPsych.timelineVariable('stimulus');
                var direction = jsPsych.timelineVariable('direction');
                var explanation = jsPsych.timelineVariable('explanation');

                return 
                    <div style="position: relative; text-align: center;">
                        <img src="${stimulus}" style="height: 200px;">
                        <br>
                        <p style="font-size: 20px;">${explanation}</p>
                        <div style="position: relative; width: 300px; margin: auto;">
                            <input type="range" min="0" max="100" value="${direction}" 
                                disabled style="width: 100%;">
                            <div id="arrow" style="position: absolute; left: ${direction}%; top: -30px;
                                font-size: 24px; transition: left 1s;">⬆</div>
                        </div>
                    </div>
                ;
            },
            choices: ['Next'],
            button_html: '<button style="font-size: 18px; padding: 10px 20px;">%choice%</button>',
            trial_duration: 10000,
        }
    ],
    timeline_variables: practice_image_data2.map(item => ({
        stimulus: item.stimulus,
        direction: item.correct_below !== undefined ? 20 : 80,  // Left for simple, right for complex
        explanation: item.correct_below !== undefined 
            ? "If i think this is a ** slightly simple** shape, I move the slider slightly left." 
            : "If i think this is a **very complex** shape, I move the slider way to the right."
    })),
    randomize_order: false
};

timeline.push(practice_demo)