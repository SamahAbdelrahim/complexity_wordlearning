

const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData('csv');
      }
  });

let timeline = [];
// push experiment logic the timeline here...
// ......
const irb = {
    // Which plugin to use
    type: jsPsychHtmlButtonResponse,
    // What should be displayed on the screen
    stimulus: '<p><font size="3">We invite you to participate in a research about object complexity.</font></p>',
    // What should the button(s) say
    choices: ['Continue']
};

// push to the timeline
timeline.push(irb)

const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    type: jsPsychHtmlButtonResponse,
    stimulus: "In this experiment, you will see a couple of pics",
    choices: ['Continue']
};
timeline.push(instructions);



var trial = {
  type: jsPsychImageSliderResponse,
  stimulus: 'firstimg.png',
  labels: ['simple', 'complex'],
  prompt: "<p>How complex is this object?</p>",
  stimulus_height: [150]
};

timeline.push(trial);

// const response = await fetch('jspsych_parameters.json');
// const images = await response.json();

var face_name_procedure = {
    timeline: [
        {
            type: jsPsychImageSliderResponse,
            stimulus: jsPsych.timelineVariable(),
            labels: ['simple', 'complex'],
            prompt: "<p>How complex is this object?</p>",
            stimulus_height: [200]
        },
    ],
    timeline_variables: images
};


var imageTrials = []
for (i in [...Array(images.length).keys()]) {
    var imageTrial = {
        type: jsPsychImageSliderResponse,
        stimulus: 'used/' +images[i],
        labels: ['simple', 'complex'],
        prompt: "<p>How complex is this object?</p>",
        stimulus_height: [200]
    }
    imageTrials= imageTrials.concat(imageTrial)
}

var shuffledTrials = jsPsych.randomization.repeat(imageTrials, 1)
timeline.push(...shuffledTrials);




//var first_trial = {
//    type: jsPsychImageKeyboardResponse,
 //   stimulus: 'firstimg.png',
 //   choices: ['f', 'j']
 // };
  
//timeline.push(first_trial);

jsPsych.run(timeline)