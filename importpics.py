import json
import os

stimulus_folder = r'/Users/samahabdelrahim/git-repos/complexity exp/list1'
stimuli = []

for stimulus in os.listdir(stimulus_folder):
   if '.png' in stimulus:
      stimuli.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json = json.dumps(stimuli)

# Write the string to the file
with open('jspsych_parameters1.json', 'w') as file:
    file.write("let images = " + stimuli_json)




stimulus_folder2 = r'/Users/samahabdelrahim/git-repos/complexity exp/list2'
stimuli2 = []

for stimulus in os.listdir(stimulus_folder2):
   if '.png' in stimulus:
      stimuli2.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json2 = json.dumps(stimuli2)

# Write the string to the file
with open('jspsych_parameters2.json', 'w') as file:
    file.write("let images2 = " + stimuli_json2)