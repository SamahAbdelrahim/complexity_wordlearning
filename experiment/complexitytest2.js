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

let images1 = ["27-5-5-corrugatedsteel-A.png", "9-27-9-corrguatedsteel-A.png", "11-34-9-metal007-AB.png", "30-38-4-074-AB.png", "19-1024-4-031-AB.png", "10-3-8-corrugatedsteel-A.png", "25-4-5-031-AB.png", "28-2000-7-printedmaterial007-A.png", "4-68-9-printedmaterial007-A.png", "20-64-6-fabric05-AB.png", "18-1022-2-074-AB.png", "5-13-9-metal007-AB.png", "7-15-8-fabric031-AB.png", "8-25-8-fabric05-AB.png", "13-57-6-031-AB.png", "16-53-11-printedmaterial007-A.png", "15- 2021-10-corrugated steel-A.png", "17-224-12-metal007-AB.png", "23-69-16-metal007-AB.png", "29-17-7-metal007-AB.png", "1-1016-1-031-A.png", "26-276-3-fabric05-AB.png", "22-89-13-printedmaterial007-A.png", "3-1016-6-corrugatedsteel-A.png", "2-42-5-fabric05-AB.png", "24-32-3-074-AB.png", "14-59-9-fabric05-AB.png", "6-1017-5-074-AB.png", "21-82-9-corrugatedsteel-A.png", "12-87-7-metal007-AB.png"]
images1 = images1.map(name => name.replace(/\s+/g, "-").replace(/-+/g, "-"));
let images2 = ["17-224-12-074-AB.png", "19-1024-4-fabric05-AB.png", "4-68-9-metal007-AB.png", "24-32-3-031-AB.png", "1-1016-1-fabric05-AB.png", "13-57-6-fabric05-AB.png", "23-69-16-074-AB.png", "7-15-8-fabric05-AB.png", "5-13-9-031-AB.png", "26-276-3-corrugatedsteel-A.png", "14-59-9-corrugatedsteel-A.png", "6-1017-5-031-AB.png", "20-64-6-corrugatedsteel-A.png", "25-4-5-fabric05-AB.png", "11-34-9-074-AB.png", "8-25-8-corrugatedsteel-A.png", "21-82-9-printedmaterial007-A.png", "12-87-7-031-AB.png", "22-89-13-metal007-AB.png", "27-5-5-printedmaterial007-A.png", "2-42-5-corrugatedsteel-A.png", "16-53-11-metal007-AB.png", "10-3-8-metal007-AB.png", "29-17-7-074-AB.png", "3-1016-6-printedmaterial007-A.png", "9-27-9-printedmaterial007-A.png", "18-1022-2-031-AB.png", "28-2000-7-metal007-AB.png", "30-38-4-031-AB.png", "15- 2021-10-printedmaterial 007- AB.png"]
let images3 = ["11-34-9-031-AB.png", "9-27-9-007-AB.png", "12-87-7-fabric05-AB.png", "20-64-6-printedmaterial007-A.png", "1-1016-1-corrugated steel-AB.png", "5-13-9-074-AB.png", "6-1017-5-fabric05-AB.png", "29-17-7-031-AB.png", "22-89-13-074-AB.png", "17-224-12-031-AB.png", "13-57-6-corrugatedsteel-A.png", "27-5-5-metal007-AB.png", "16-53-11-074-AB.png", "19-1024-4-corrugatedsteel-A.png", "25-4-5-corrguatedsteel-A.png", "24-32-3-fabric05-AB.png", "14-59-9-printedmaterial007-A.png", "7-15-8-corrugatedsteel-A.png", "2-42-5-printedmaterial007-A.png", "4-68-9-031-AB.png", "3-1016-6-printedmaterial007-AB.png", "10-3-8-074-AB.png", "8-25-8-printedmaterial007-A.png", "26-276-3-printedmaterial007-A.png", "28-2000-7-074-AB.png", "18-1022-2-fabric05-AB.png", "23-69-16-031-AB.png", "15- 2021-10-007- A.png", "30-38-4-fabric05-AB.png", "21-82-9-metal007-AB.png"]
let images4 = ["16-53-11-031-AB.png", "1-1016-1-paintedmetal007-AB.png", "15- 2021-10-074- A.png", "28-2000-7-031-AB.png", "14-59-9-007-AB.png", "21-82-9-031-AB.png", "2-42-5-metal007-AB.png", "3-1016-6-074-AB.png", "6-1017-5-corrugatedsteel-A.png", "8-25-8-007-AB.png", "5-13-9-fabric05-AB.png", "26-276-3-metal007-AB.png", "27-5-5-074-AB.png", "10-3-8-031-AB.png", "12-87-7-corrugatedsteel-A.png", "4-68-9-074-AB.png", "30-38-4-corrugatedsteel-A.png", "18-1022-2-corrugatedsteel-A.png", "20-64-6-metal007-AB.png", "29-17-7-fabric05-AB.png", "7-15-8-printedmaterial007-A.png", "11-34-9-fabric05-AB.png", "19-1024-4-printedmaterial007-A.png", "17-224-12-fabric05-AB.png", "25-4-5-printedmaterial007-A.png", "24-32-3-corrugatedsteel-A.png", "22-89-13-031-AB.png", "23-69-16-fabric05-AB.png", "9-27-9-074-AB.png", "13-57-6-printedmaterial007-A.png"]
let images5 = ["5-13-9-corrguated steel-A.png", "17-224-12-corrugatedsteel-A.png", "29-17-7-corrugatedsteel-A.png", "12-87-7-printedmaterial007-A.png", "26-276-3-074-AB.png", "18-1022-2-printedmaterial007-A.png", "14-59-9-074-AB.png", "21-82-9-031-AB.png", "30-38-4-printedmaterial-A.png", "3-1016-6-031-AB.png", "9-27-9-031-AB.png", "15- 2021-10-031- AB.png", "1-1016-1-metal007-AB.png", "7-15-8-metal007-AB.png", "11-34-9-corrugatedsteel-A.png", "19-1024-4-metal007-AB.png", "22-89-13-fabric05-AB.png", "23-69-16-corrugatedsteel-A.png", "2-42-5-074-AB.png", "28-2000-7-fabric05-AB.png", "25-4-5-metal007-AB.png", "13-57-6-007-AB.png", "20-64-6-074-AB.png", "10-3-8-fabric05-AB.png", "8-25-8-074-AB.png", "16-53-11-fabric05-AB.png", "6-1017-5-printedmaterial007-A.png", "4-68-9-fabric05-AB.png", "24-32-3-printedmaterial007-A.png", "27-5-5-031-AB.png"]
let images6 = ["9-27-9-fabric05-AB.png", "15- 2021-10-05- AB.png", "4-68-9-corrugatedsteel-A.png", "28-2000-7-corrugatedsteel-A.png", "3-1016-6-fabric05-AB.png", "20-64-6-031-AB.png", "26-276-3-031-AB.png", "8-25-8-031-AB.png", "16-53-11-corrugatedsteel-A.png", "5-13-9-printed material 007-A.png", "18-1022-2-metal007-AB.png", "11-34-9-printedmaterial007-A.png", "14-59-9-031-AB.png", "7-15-8-074-A.png", "22-89-13-corrugatedsteel-A.png", "29-17-7-printedmaterial007-A.png", "6-1017-5-metal007-AB.png", "10-3-8-printedmaterial007-A.png", "19-1024-4-074-AB.png", "13-57-6-074-AB.png", "2-42-5-031-AB.png", "24-32-3-metal007-AB.png", "30-38-4-metal007-AB.png", "25-4-5-074-AB.png", "23-69-16-printedmaterial007-A.png", "21-82-9-fabric05-AB.png", "17-224-12-printedmaterial007-A.png", "27-5-5-fabric05-AB.png", "1-1016-1-074-AB.png", "12-87-7-007-AB.png"]
// Keeping this template in case code below doesn't work
// var imagesarray1 = [];
// for (let i = 0; i < images1.length; ++i) {
//     var img = 'list1/' +images1[i];
//     imagesarray1.push({ stimulus: img });
// };

// Function to create image arrays with paths
function createImageArray(images, folder) {
    return images.map(img => ({ stimulus: `${folder}/${img}` }));
}

// Create arrays for each material group
let imagesarray1 = createImageArray(images1, 'list1');
let imagesarray2 = createImageArray(images2, 'list2');
let imagesarray3 = createImageArray(images3, 'list3');
let imagesarray4 = createImageArray(images4, 'list4');
let imagesarray5 = createImageArray(images5, 'list5');
let imagesarray6 = createImageArray(images6, 'list6');


// Combine all arrays into a single array of arrays
var arrayof_arrays = [imagesarray2,  imagesarray2, imagesarray3, imagesarray4, imagesarray5, imagesarray6]; 

// Randomly select one array
var chosenarrayindex = Math.floor(Math.random() * arrayof_arrays.length);
var chosenarray = arrayof_arrays[chosenarrayindex];

// Shuffle the chosen array
chosenarray = shuffleArray(chosenarray);


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
            stimulus_height: 200, // Set the height of the image

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
            labels: ['simple', 'complex'],
            prompt: "<p>How complex is this object?</p>",
            stimulus_height: 200, // Set the height of the image
            required: true,
            on_finish: function(data) {
                // Access the value of 'uni_lemma' for the current trial
                var currentWord = jsPsych.timelineVariable('stimulus');
                var blockname = "blockpics";

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                });
            }
        },
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