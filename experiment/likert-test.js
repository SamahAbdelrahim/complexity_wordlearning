const trial = {
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'likert',
        prompt: 'I like to eat vegetables.',
        likert_scale_min_label: 'Strongly Disagree',
        likert_scale_max_label: 'Strongly Agree',
        likert_scale_values: [
          {value: 1},
          {value: 2},
          {value: 3},
          {value: 4},
          {value: 5}
        ]
      }, 
      {
        type: 'likert',
        prompt: 'I like to eat fruit.',
        likert_scale_min_label: 'Strongly Disagree',
        likert_scale_max_label: 'Strongly Agree',
        likert_scale_values: [
          {value: 1},
          {value: 2},
          {value: 3},
          {value: 4},
          {value: 5}
        ]
      },
      {
        type: 'likert',
        prompt: 'I like to eat meat.',
        likert_scale_min_label: 'Strongly Disagree',
        likert_scale_max_label: 'Strongly Agree',
        likert_scale_values: [
          {value: 1},
          {value: 2},
          {value: 3},
          {value: 4},
          {value: 5}
        ]
      },  

    ],
    [
      {
        type: 'likert-table',
        prompt: ' ',
        statements: [
          {prompt: 'I like to eat vegetables', name: 'VeggiesTable'},
          {prompt: 'I like to eat fruit', name: 'FruitTable'},
          {prompt: 'I like to eat meat', name: 'MeatTable'},
        ],
        options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
      }
    ]
  ],
};