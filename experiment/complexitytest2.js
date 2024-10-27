const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData('csv');
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

let images1 = ["13-1020- 6 - 031.png", "19-1022- 4- 031.png", "23-1022- 16- 007.png"]
let images2 = ["19-1022- 4- 031.png", "8- 1017- 8- corrugated steel.png",  "26-1023- 7 - corrugated steel.png"]
let images3 = []
let images4 = []
let images5 = []
let images6 = []

var imagesarray1 = [];
for (let i = 0; i < images1.length; ++i) {
    var img = 'list1/' +images1[i];
    imagesarray1.push({ stimulus: img });
};

var imagesarray2 = [];
for (let i = 0; i < images2.length; ++i) {
    var img = 'list2/' +images2[i];
    imagesarray2.push({ stimulus: img });
};
//var combinedImagesArray = imagesarray.concat(imagesarray2);

var arrayof_arrays = [imagesarray2,  imagesarray2]; 


var chosenarrayindex = Math.floor(Math.random() * arrayof_arrays.length);
var chosenarray = arrayof_arrays[chosenarrayindex];

var trial1 = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"><img src="stanford.png"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 18px;">' +
        '<p>By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology.</p>' +
        '<p>If you have questions about this research, please contact us at <a href="mailto:languagecoglab@gmail.com">languagecoglab@gmail.com</a>.</p>' +
        '<p>You must be at least 18 years old to participate. Your participation in this research is voluntary.</p>' +
        '<p>You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences.</p>' +
        '<p>Your anonymity is assured.</p>' +
        '<p> Click next to begin.</p>' +
        '</div>'
    ],
    show_clickable_nav: true,
    button_label: 'Next', // Customize the button label
    button_html: '<button class="jspsych-btn" style="font-size: 30px; padding: 10px 20px;">%choice%</button>' // Customize the button style
};


timeline.push(trial1)

var opening = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 30px;">' +'<p> <font size="4">In this experiment, on each trial You will use a slider to make judgements about objects. Moving the slider to the left indicates simplicity, right indicates complexity. <font> <p>'  +
        '</div>'   
    ],
    on_finish: function(data) {// capture info from Prolific
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
        console.log("from object data")
        console.log(data.subject_id, data.study_id, data.session_id) },
    show_clickable_nav: true,

};

timeline.push(opening);

var block1 = {
    timeline: [
        {
            type: jsPsychImageSliderResponse,
            stimulus: jsPsych.timelineVariable('stimulus'),
            labels: ['simple', 'complex'],
            prompt: "<p>How complex is this object?</p>",
            stimulus_height: [20]
        },
    ],
    timeline_variables: imagesarray1,
    randomize_order: true
};

var block_pics = {
    timeline: [
        {
            type: jsPsychImageSliderResponse,
            stimulus: jsPsych.timelineVariable('stimulus'),
            questions: [
                {
                    
                    labels: ['simple', 'complex'],
                    prompt: "<p>How complex is this object?</p>",
                    stimulus_height: [50],
                    required: true,
                }
      
            ],
            
            on_finish: function(data) {
                // Access the value of 'uni_lemma' for the current trial
                var currentWord = jsPsych.timelineVariable('stimulus');
                var blockname = "blockpics";


                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                });

            } 
        }
    ],
    timeline_variables: imagesarray1,
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