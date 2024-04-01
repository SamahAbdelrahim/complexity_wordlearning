
const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData('csv');
      }
  });

let timeline = [];
// push experiment logic the timeline here...
// ......
var trial1 = {
    type: jsPsychInstructions,
    pages: [
             '<br>' + 
    '<img src="stanford.png"></img>' +
    'By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology. If you have questions about this research, please contact us at languagecoglab@gmail.com. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured. ',
    'In this experiment, you will see a couple of pics, you are asked about your object judgments.. Click next to begin.',
    ],
    show_clickable_nav: true
}

timeline.push(trial1)

// const irb = {
//     // Which plugin to use

//     type: jsPsychHtmlButtonResponse,
//     // What should be displayed on the screen
//     stimulus: '<p><font size="3">By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology. If you have questions about this research, please contact us at languagecoglab@gmail.com. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured.</font></p>',
//     // What should the button(s) say
//     choices: ['Continue']
// };

// // push to the timeline
// timeline.push(irb)

const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><font size="3"> You will use a slider to make judgements about objects. Moving the slider to the left indicates simplicity, right indicates complexity. </font></p>',
    choices: ['Continue']
};
timeline.push(instructions);



// var trial = {
//   type: jsPsychImageSliderResponse,
//   prompt: "<p>How complex is this object?</p>",
//   stimulus: 'firstimg.png',
//   labels: ['simple', 'complex'],
//   stimulus_height: [150]
// };

// timeline.push(trial);

// const response = await fetch('jspsych_parameters.json');
// const images = await response.json();

var imagesarray1 = [];
let images = ["13-1020- 6 - 031.png", "19-1022- 4- 031.png", "3- 1016 - 10- corrugated steel.png", "25-1023- 5- 031.png", "14-1020- 9 - denim.png", "4- 1016 - 11- painted metal 007.png", "9- 1017- 10- corrugated steel.png", "27-cylinder-corrugated steel.png", "5- 1016 - 18- metal 007.png", "1- 1016 - 1016 - 1- 031.png", "26-1023- 7 - denim.png", "12-1020- 4- 074.png", "10- 1017- 11- printedmaterial 007.png", "18-1022- 3- 074.png", "8- 1017- 8 - denim.png", "16-1020- 11 - printedmaterial 007.png", "21-1022- 9 - corrugated steel.png", "15-1020- 10 - corrugated steel.png", "2- 1016 - 9 - denim .png", "17-1020- 12- 007.png", "20-1022- 6 - denim.png", "6- 1017- 5- 074.png", "11-1017- 14- 007.png", "7- 1017- 6- 031.png", "24-1023- 3 - 074.png", "22-1022- 13 - printedmaterial 007.png", "23-1022- 16- 007.png"]
for (let i = 0; i < images.length; ++i) {
    var img = 'list1/' +images[i];
    imagesarray1.push({ stimulus: img });
};

let images2 = ["19-1022- 4- 031.png", "8- 1017- 8- corrugated steel.png", "22-1022- 13- 007.png", "24-1023- 3- 031.png", "10- 1017- 11- 007.png", "2- 1016 - 9 - corrugated steel png.png", "25-1023- 5- 031.png", "18-1022- 3- 031.png", "26-1023- 7 - corrugated steel.png", "8- 1017- 8- printedmaterial 007.png", "4- 1016 - 11 - metal 007.png", "16-1020- 11- 007.png", "14-1020- 9 - corrugated steel.png", "11-1017- 14 - 074.png", "13-1020- 6 - denim.png", "27-cylinder - printedmaterial 007.png", "7- 1017- 6 - denim.png", "6- 1017- 5- 031.png", "5- 1016 - 18 - 031.png", "21-1022- 9 - printedmaterial 007.png", "23-1022- 16- 074.png", "1- 1016 - 1016 - 1- denim .png", "12-1020- 4 - 031.png", "15-1020- 10 - printedmaterial 007.png", "20-1022- 6 - corrugated steel.png", "17-1020- 12- 074.png"]
var imagesarray2 = [];
for (let i = 0; i < images2.length; ++i) {
    var img = 'list2/' +images2[i];
    imagesarray2.push({ stimulus: img });
};
//var combinedImagesArray = imagesarray.concat(imagesarray2);

var block1 = {
    timeline: [
        {
            type: jsPsychImageSliderResponse,
            stimulus: jsPsych.timelineVariable('stimulus'),
            labels: ['simple', 'complex'],
            prompt: "<p>How complex is this object?</p>",
            stimulus_height: [200]
        },
    ],
    timeline_variables: imagesarray1,
    randomize_order: true
};


var block2 = {
    timeline: [
        {
            type: jsPsychImageSliderResponse,
            stimulus: jsPsych.timelineVariable('stimulus'),
            labels: ['simple', 'complex'],
            prompt: "<p>How complex is this object?</p>",
            stimulus_height: [200]
        },
    ],
    timeline_variables: imagesarray2,
    randomize_order: true
};

var blocksArray = [ block1, block2 ];
var chosenblock = jsPsych.randomization.sampleWithReplacement(blocksArray, 1);
timeline.push(...chosenblock);


// var imageTrials = []
// for (i in [...Array(images.length).keys()]) {
//     var imageTrial = {
//         type: jsPsychImageSliderResponse,
//         stimulus: 'used/' +images[i],
//         labels: ['simple', 'complex'],
//         prompt: "<p>How complex is this object?</p>",
//         stimulus_height: [200]
//     }
//     imageTrials= imageTrials.concat(imageTrial)
// }

// var shuffledTrials = jsPsych.randomization.repeat(imageTrials, 1)
// timeline.push(...shuffledTrials);




//var first_trial = {
//    type: jsPsychImageKeyboardResponse,
 //   stimulus: 'firstimg.png',
 //   choices: ['f', 'j']
 // };
  
//timeline.push(first_trial);

jsPsych.run(timeline)