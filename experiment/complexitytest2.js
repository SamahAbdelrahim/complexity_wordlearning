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

let images1 = ["1- 1016 - 1016 - 1- 031.png", "2- 1016 - 9 - denim.png", "3- 1016 - 10 - corrugated steel.png", "4- 1016 - 11- painted metal 007.png", "5- 1016 - 18- metal 007.png", "6- 1017- 5- 074.png", "7- 1017- 6- 031.png", "8- 1017- 8 - denim.png", "9- 1017- 10- corrugated steel.png", "10- 1017- 11- printedmaterial 007.png", "11-1017- 14- 007.png", "12-1020- 4- 074.png", "13-1020- 6 - 031.png", "14-1020- 9 - denim.png", "15-1020- 10 - corrugated steel.png", "16-1020- 11 - printedmaterial 007.png", "17-1020- 12- 007.png", "18-1022- 3- 074.png", "19-1022- 4- 031.png", "20-1022- 6 - denim.png", "21-1022- 9 - corrugated steel.png", "22-1022- 13 - printedmaterial 007.png", "23-1022- 16- 007.png", "24-1023- 3 - 074.png", "25-1023- 5- 031.png", "26-1023- 7 - denim.png", "27-cylinder-corrugated steel.png"]   
let images2 = ["1- 1016 - 1016 - 1- denim .png", "2- 1016 - 9 - corrugated steel png.png", "4- 1016 - 11 - metal 007.png", "5- 1016 - 18 - 031.png", "6- 1017- 5- 031.png", "7- 1017- 6 - denim.png", "8- 1017- 8- corrugated steel.png", "10- 1017- 11- 007.png", "11-1017- 14 - 074.png", "12-1020- 4 - 031.png", "13-1020- 6 - denim.png", "14-1020- 9 - corrugated steel.png", "15-1020- 10 - printedmaterial 007.png", "16-1020- 11- 007.png", "17-1020- 12- 074.png", "18-1022- 3- 031.png", "19-1022- 4- 031.png", "20-1022- 6 - corrugated steel.png", "21-1022- 9 - printedmaterial 007.png", "22-1022- 13- 007.png", "23-1022- 16- 074.png", "24-1023- 3- 031.png", "25-1023- 5- 031.png", "26-1023- 7 - corrugated steel.png", "27-cylinder - printedmaterial 007.png"]
let images3 = ["1- 1016 - 1016 - 1- corrugated steel png.png", "4- 1016 - 11 - 031.png", "5- 1016 - 18 - 074 .png", "6- 1017- 5- 1 denim.png", "7- 1017- 6- corrugated steel.png", "8- 1017- 8- printedmaterial 007.png", "9- 1017- 10- 007.png", "10- 1017- 11- 074.png", "11-1017- 14- 031.png", "12-1020- 4 - denim.png", "13-1020- 6 - corrugated steel.png", "14-1020- 9 - printedmaterial 007.png", "15-1020- 10- 007.png", "16-1020- 11- 074.png", "17-1020- 12 - 031.png", "18-1022- 3 - denim.png", "19-1022- 4 - corrugated steel.png", "20-1022- 6 - printedmaterial 007.png", "21-1022- 9- 007.png", "22-1022- 13- 074.png", "23-1022- 16- 031.png", "24-1023- 3 - denim.png", "25-1023- 5 - corrugated steel.png", "26-1023- 7 - printedmaterial 007.png", "27-cylinder - 007.png"]
let images4 = ["3- 1016 - 10 - 074 .png", "4- 1016 - 11 - 074 .png", "5- 1016 - 18 - denim .png", "6- 1017- 5- corrugated steel.png", "7- 1017- 6- printedmaterial 007.png", "8- 1017- 8- 007.png", "9- 1017- 10- 074.png", "10- 1017- 11- 031.png", "11-1017- 14 - denim.png", "12-1020- 4 - corrugated steel.png", "13-1020- 6 - printedmaterial 007.png", "14-1020- 9- 007.png", "15-1020- 10- 074.png", "16-1020- 11 - 031.png", "17-1020- 12 - denim.png", "18-1022- 3 - corrugated steel.png", "19-1022- 4 - printedmaterial 007.png", "20-1022- 6- 007.png", "21-1022- 9- 074.png", "22-1022- 13- 031.png", "23-1022- 16 - denim.png", "24-1023- 3 - corrugated steel.png", "25-1023- 5 - printedmaterial 007.png", "26-1023- 7 - 007.png", "27-cylinder - 074.png"]
let images5 = ["2- 1016 - 9 - 074 .png", "3- 1016 - 10 - 031.png", "4- 1016 - 11 - 074 .png", "5- 1016 - 18- corrugated steel.png", "6- 1017- 5- printedmaterial 007.png", "7- 1017- 6- 007.png", "8- 1017- 8- 074.png", "9- 1017- 10- 031.png", "10- 1017- 11 - denim.png", "11-1017- 14- corrugated steel.png", "12-1020- 4 - printedmaterial 007.png", "13-1020- 6- 007.png", "14-1020- 9- 074.png", "15-1020- 10 - 031.png", "16-1020- 11 - denim.png", "17-1020- 12 - corrugated steel.png", "18-1022- 3 - printedmaterial 007.png", "19-1022- 4- 007.png", "20-1022- 6- 074.png", "21-1022- 9- 031.png", "22-1022- 13 - denim.png", "23-1022- 16 - corrugated steel.png", "24-1023- 3 - printedmaterial 007.png", "25-1023- 5 - 007.png", "26-1023- 7 - 074.png", "27-cylinder - 031.png"]
let images6 = ["1- 1016 - 1016 - 1- 074.png", "2- 1016 - 9- 031.png", "3- 1016 - 10 - 1 denim .png", "4- 1016 - 11- corrugated steel.png", "5- 1016 - 18- painted metal 007.png", "6- 1017- 5- 007.png", "7- 1017- 6- 074.png", "8- 1017- 8- 031.png", "9- 1017- 10 - denim.png", "10- 1017- 11 - corrugated steel.png", "11-1017- 14 - printedmaterial 007.png", "12-1020- 4- 007.png", "13-1020- 6- 074.png", "14-1020- 9 - 031.png", "15-1020- 10 - denim.png", "16-1020- 11 - corrugated steel.png", "17-1020- 12 - printedmaterial 007.png", "18-1022- 3- 007.png", "19-1022- 4- 074.png", "20-1022- 6- 031.png", "21-1022- 9 - denim.png", "22-1022- 13 - corrugated steel.png", "23-1022- 16 - printedmaterial 007.png", "24-1023- 3 - 007.png", "25-1023- 5 - 074.png", "26-1023- 7- 031.png", "27-cylinder - denim.png"]

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