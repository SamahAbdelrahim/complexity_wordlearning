// const jsPsych = initJsPsych({
//     on_finish: function () {
//         jsPsych.data.displayData('csv');
//       }
//   });

var jsPsych = initJsPsych({
    use_webaudio: false,
    on_finish: function(data){
        console.log("starting")
        jsPsych.data.displayData();
    
        var all_trials = jsPsych.data.get().values();
        console.log("Starting to log data");
        console.log(all_trials)
        all_trials.forEach(trial => {
             //logExpData(trial);
             console.log("one trial");
             console.log(trial);

         });

         Promise.all(all_trials.map(trial => logExpData(trial)))
         .then(() => {
             console.log("All data logged, redirecting...");
             //window.location.href = "https://app.prolific.com/submissions/complete?cc=C183XD81";
         })
         .catch(error => {
             console.error("Failed to log all data", error);
             alert("There was an error saving your data. Please contact the study administrator.");
         });
    }
}); 

let timeline = [];


// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//let images1 = ["27-5-5-corrugatedsteel-A.png", "9-27-9-corrguatedsteel-A.png", "11-34-9-metal007-AB.png", "30-38-4-074-AB.png", "19-1024-4-031-AB.png", "10-3-8-corrugatedsteel-A.png", "25-4-5-031-AB.png", "28-2000-7-printedmaterial007-A.png", "4-68-9-printedmaterial007-A.png", "20-64-6-fabric05-AB.png", "18-1022-2-074-AB.png", "5-13-9-metal007-AB.png", "7-15-8-fabric031-AB.png", "8-25-8-fabric05-AB.png", "13-57-6-031-AB.png", "16-53-11-printedmaterial007-A.png", "15- 2021-10-corrugated steel-A.png", "17-224-12-metal007-AB.png", "23-69-16-metal007-AB.png", "29-17-7-metal007-AB.png", "1-1016-1-031-A.png", "26-276-3-fabric05-AB.png", "22-89-13-printedmaterial007-A.png", "3-1016-6-corrugatedsteel-A.png", "2-42-5-fabric05-AB.png", "24-32-3-074-AB.png", "14-59-9-fabric05-AB.png", "6-1017-5-074-AB.png", "21-82-9-corrugatedsteel-A.png", "12-87-7-metal007-AB.png"]
let videos = [
    "1-1016-1-ab.stl.mp4",
    "2-42-5-ab.stl.mp4",
    "3-1016-6-a.stl.mp4",
    "4-68-9-ab.stl.mp4",
    "5-13-9-ab.stl.mp4",
    "6-1017-5-ab.stl.mp4",
    "7-15-8-ab.stl.mp4",
    "8-25-8-ab.stl.mp4"
  ]
//var chosenarray = shuffleArray(videos);
var chosenarray = shuffleArray(videos).map(video => ({
    stimulus: [`videos/${video}`] // Wrap each video filename in an array
}));


var trial1 = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"><img src="stanford.png"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 18px; line-height: 1.5; color: #333;">' +
        '<p>By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology.</p>' +
        '<p>If you have questions about this research, please contact us at <a href="mailto:languagecoglab@gmail.com" style="color: #007bff; text-decoration: none;">languagecoglab@gmail.com</a>.</p>' +
        '<p>You must be at least 18 years old to participate. Your participation in this research is voluntary.</p>' +
        '<p>You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences.</p>' +
        '<p>Your anonymity is assured.</p>' +
        '<p><strong>Click "Next" to begin.</strong></p>' +
        '</div>'
    ],
    show_clickable_nav: true,
    button_label: 'Next',
    button_html: '<button class="jspsych-btn" style="font-size: 20px; padding: 12px 24px; background-color: #8C1515; color: white; border: none; border-radius: 10px; cursor: pointer;">%choice%</button>'
};


timeline.push(trial1)

var opening = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 20px; line-height: 1.6; color: #333; padding: 20px;">' +
        '<p>In this experiment, on each trial, you will use a slider to make judgments about how simple or complex some objects are.</p>' +
        '<p>Moving the slider from the middle to the left indicates <strong>simplicity</strong> (i.e., the object is simple), while moving from the middle it to the right indicates <strong>complexity</strong> (i.e., the object is complex).</p>' + 
        "<p style='font-size:18px; color: #555;'>You can adjust the slider freely, across all the range, to indicate <strong>how simple or complex</strong> you think the object is, from <em>slightly or very simple</em> to <em>slightly or very complex</em>.</p>"+
        '<p><strong>Let’s see some examples.</strong></p>' +
        '</div>'
    ],
    on_finish: function(data) {
        // Capture info from Prolific
        var subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
        var study_id = jsPsych.data.getURLVariable('STUDY_ID');
        var session_id = jsPsych.data.getURLVariable('SESSION_ID');

        console.log("subject");
        console.log(subject_id);

        jsPsych.data.addProperties({
            subject_id: subject_id,
            study_id: study_id,
            session_id: session_id,
        });

        console.log("from object data");
        console.log(data.subject_id, data.study_id, data.session_id);
    },
    show_clickable_nav: true,
    button_label: "Next",
    button_html: '<button class="jspsych-btn" style="font-size: 20px; padding: 12px 24px; background-color: #8C1515; color: white; border: none; border-radius: 10px; cursor: pointer;">%choice%</button>'
};


timeline.push(opening);

var practice_image_data = [
    { stimulus: "concave.png", correct_above: 50 }, 
    { stimulus: "circle.png", correct_below: 50 }, 
    { stimulus: "polygon.png", correct_below: 50 } , 
    { stimulus: "random.png", correct_below: 50 }
];

var practice_image_data2 = [
    { stimulus: "square.png", correct_below: 50 }, 
    { stimulus: "heptagon.png", correct_above: 50 }
];

var practice_demo = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: function() {
                var stimulus = jsPsych.timelineVariable('stimulus');
                var explanation = jsPsych.timelineVariable('explanation');
                var start_position = 50;  // Start at the middle

                return `
                    <div style="position: relative; text-align: center; padding: 20px;">
                        <img src="${stimulus}" style="height: 200px; margin-bottom: 10px;">
                        
                        <p style="font-size: 22px; color: #333;">
                            ${explanation}
                        </p>

                        <div style="position: relative; width: 350px; margin: auto;">
                            <!-- Slider track -->
                            <input type="range" min="0" max="100" value="${start_position}" 
                                disabled style="width: 100%; opacity: 0.6; cursor: not-allowed;">
                            
                            <!-- Arrow indicator (now below the slider) -->
                            <div id="arrow" style="position: absolute; left: ${start_position}%; 
                                top: 30px; font-size: 28px; transition: left 3s ease-in-out;
                                transform: translateX(-50%);">⬆</div> 

                            <!-- Labels below slider -->
                            <div style="display: flex; justify-content: space-between; margin-top: 40px;">
                                <span style="font-size: 18px; color: #555;">Very Simple</span>
                                <span style="font-size: 18px; color: #555;">Neutral</span>
                                <span style="font-size: 18px; color: #555;">Very Complex</span>
                            </div>
                        </div>
                    </div>
                `;
            },
            choices: ['Next'],
            button_html: '<button class="jspsych-btn" style="font-size: 18px; padding: 10px 20px; margin-top: 20px; background-color: #8C1515; color: white; border-radius: 8px;">%choice%</button>',
            trial_duration: 9000,
            on_load: function() {
                var direction = jsPsych.timelineVariable('direction'); // Get the target position
                var arrow = document.getElementById("arrow");
                var slider = document.querySelector("input[type=range]"); // Get the slider
            
                // Delay the movement slightly for effect
                setTimeout(() => {
                    arrow.style.left = direction + "%";
                    
                    // Smoothly update the slider value in sync with the arrow
                    let currentValue = 50;
                    let step = (direction - currentValue) / 50; // Break movement into steps
                    
                    let interval = setInterval(() => {
                        currentValue += step;
                        slider.value = currentValue;
                        if ((step > 0 && currentValue >= direction) || (step < 0 && currentValue <= direction)) {
                            clearInterval(interval); // Stop when the target is reached
                        }
                    }, 50); // Adjust speed of movement
                }, 500);
            } // Delay animation slightly for effect
            
        }
    ],
    timeline_variables: practice_image_data2.map(item => ({
        stimulus: item.stimulus,  // Make sure images are in the correct folder
        direction: item.correct_below !== undefined ? 35 : 100,  // Moves left for simple, right for complex
        explanation: item.correct_below !== undefined 
            ? "If I think this object is <strong>slightly simple</strong>, I move the slider <strong>slightly</strong> to the left."
            : "If I think this object is <strong>very complex</strong>, i move the slider <strong>all the way</strong> to the right."
    })),
    randomize_order: false
};


timeline.push(practice_demo);


var practice_intro = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 20px; line-height: 1.6; color: #333; padding: 20px;">' +
        '<p>Now, before starting the actual experiment , you get to practice a little bit yourself</p>' +
        '<p> you will see some <strong>pictures</strong> of objects, please remember to judge how simple or complex the objects are by using the slider</p>' +
        '<p><strong>Let’s begin</strong></p>' +
        '</div>'
    ],
    show_clickable_nav: true,
    button_label: "Next",
    button_html: '<button class="jspsych-btn" style="font-size: 20px; padding: 12px 24px; background-color: #8C1515; color: white; border: none; border-radius: 10px; cursor: pointer;">%choice%</button>'
};


timeline.push(practice_intro);

// Shuffle the practice images
practice_image_data = jsPsych.randomization.shuffle(practice_image_data);

// Practice block with slider response
var practice_complexity = {
    timeline: practice_image_data.map(item => ({
        type: jsPsychImageSliderResponse,
        stimulus: item.stimulus,
        labels: ['Very Simple', 'Very Complex'],
        prompt: "<p style='font-size:22px; margin-bottom: 15px;'>How complex is this object?</p>" +
                "<p style='font-size:18px; color: #555;'>Move the slider to match how complex you think the object is.</p>",
        stimulus_height: 200,
        require_movement: true,

        on_finish: function(data) {
            var response = data.response;

            // Generate a fluid feedback message
            var interpretation;
            if (response < 15) {
                interpretation = "You thought this object was **extremely simple**.";
            } else if (response < 25) {
                interpretation = "You thought this object was **fairly simple**.";
            } else if (response < 50) {
                interpretation = "You thought this object was **moderately simple**.";
            } else if (response < 75) {
                interpretation = "You thought this object was **moderately complex**.";
            } else if (response < 85) {
                interpretation = "You thought this object was **fairly complex**.";
            }else {
                interpretation = "You thought this object was **extremely complex**.";
            }

            jsPsych.data.addDataToLastTrial({
                pic: item.stimulus,
                response_value: response,
                feedback: interpretation,
                block: "practice block"
            });
        }
    }))
};

// Feedback trial (shown after each slider response)
var feedback_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        var last_trial = jsPsych.data.getLastTrialData().values()[0];
        return `<p style='font-size:18px;'>It seems like</p>
                <p style='font-size:18px; color:#333;'>${last_trial.feedback}</p>
                <p style='font-size:18px; color:#666;'>Remember, you can use the entire range of the slider to match your intuition.</p>`;
    },
    choices: ["Next"],
    button_html: '<button class="jspsych-btn" style="font-size:18px; padding: 12px 24px; background-color:#8C1515; color:white; border:none; border-radius:8px; cursor:pointer;">%choice%</button>'
};

// Combine trials (slider + feedback) in sequence
var full_practice_complexity = {
    timeline: [].concat(...practice_image_data.map(item => [
        { ...practice_complexity.timeline.find(t => t.stimulus === item.stimulus) }, // Slider trial
        feedback_trial // Feedback trial
    ]))
};

// Add to timeline
timeline.push(full_practice_complexity);


var start = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px 0;">' +
        '<p style="font-size: 24px;"> Instead of pictures, now you will see <strong>short *videos* of objects</strong> </p>' +
        '<p style="font-size: 22px; font-weight: bold;"> Response is only allowed after the video finish playing</p>' +
        '<p style="font-size: 20px; font-weight: bold;"> Everythings else is the same</p>' +
        '<p style="font-size: 20px;">Now, let’s begin!</p>' +
        '<p style="font-size: 18px; color: #555;">Click the button below to start the experiment.</p>' +
        '</div>'
    ],
    show_clickable_nav: true,
    button_label: 'Begin',
    button_html: '<button class="jspsych-btn" style="font-size: 20px; padding: 12px 24px; background-color:#8C1515; color:white; border:none; border-radius:8px; cursor:pointer;">%choice%</button>'
};

timeline.push(start);


var block_pics = {
    timeline: [
        {
            type: jsPsychVideoSliderResponse,
            stimulus: jsPsych.timelineVariable('stimulus'),
            labels: ['very Simple', 'Very Complex'],
            prompt: "<p style='margin-bottom: 5px;'>How complex is this object?</p>", // Adjust prompt spacing
            stimulus_height: 350, // Image height

            stimulus_css: {
                "margin-top": "-40px"  // Moves image UP
            },

            slider_container_css: {
                "margin-top": "-60px", // Moves slider UP
                "position": "relative"
            },

            button_css: {
                "margin-top": "-50px" // Moves the Continue button UP
            },

            require_movement: true,
            response_allowed_while_playing: false, // Allow response after first playback

            on_load: function() {
                let videoElement = document.querySelector("video");
                console.log("vid elemtn", videoElement);

                if (videoElement) {
                    //videoElement.play(); // First play
                    videoElement.onended = function() {
                        videoElement.currentTime = 0; // Reset video time
                        videoElement.play(); // Play again
                        videoElement.onended = null; // Remove the event to prevent looping
                    };
                }
            },

            on_finish: function(data) {
                var currentPic = jsPsych.timelineVariable('stimulus');
                var blockname = "blockpics";

                jsPsych.data.addDataToLastTrial({
                    pic: currentPic[0],
                    block: blockname,
                });
            }
        },
    ],
    timeline_variables: chosenarray,
    randomize_order: true
};

timeline.push(block_pics);



var goodbye = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"><img src="stanford.png"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 30px;">' +
        '<p> <b>Thank you for your participation and we appreciate you helping science. </b> </p>' +
        '<p> please click next to get redirected ...  </p>' +
        '</div>'
    ],
    show_clickable_nav: true,

};

timeline.push(goodbye);


jsPsych.run(timeline);

//https://imagetostl.com/convert/file/stl/to/mp4#google_vignette 