import json
import os

stimulus_folder = r'/Users/samahabdelrahim/git-repos/complexity_wordlearning/experiment/list1'
stimuli = []

for stimulus in os.listdir(stimulus_folder):
   if '.png' in stimulus:
      stimuli.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json = json.dumps(stimuli)

# Write the string to the file
with open('jspsych_parameters1.json', 'w') as file:
    file.write("let images = " + stimuli_json)




stimulus_folder2 = r'/Users/samahabdelrahim/git-repos/complexity_wordlearning/experiment/list2'
stimuli2 = []

for stimulus in os.listdir(stimulus_folder2):
   if '.png' in stimulus:
      stimuli2.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json2 = json.dumps(stimuli2)

# Write the string to the file
with open('jspsych_parameters2.json', 'w') as file:
    file.write("let images2 = " + stimuli_json2)




stimulus_folder3 = r'/Users/samahabdelrahim/git-repos/complexity_wordlearning/experiment/list3'
stimuli3 = []

for stimulus in os.listdir(stimulus_folder3):
   if '.png' in stimulus:
      stimuli3.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json3 = json.dumps(stimuli3)

# Write the string to the file
with open('jspsych_parameters3.json', 'w') as file:
    file.write("let images3 = " + stimuli_json3)




stimulus_folder4 = r'/Users/samahabdelrahim/git-repos/complexity_wordlearning/experiment/list4'
stimuli4 = []

for stimulus in os.listdir(stimulus_folder4):
   if '.png' in stimulus:
      stimuli4.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json4 = json.dumps(stimuli4)

# Write the string to the file
with open('jspsych_parameters4.json', 'w') as file:
    file.write("let images4 = " + stimuli_json4)



stimulus_folder5 = r'/Users/samahabdelrahim/git-repos/complexity_wordlearning/experiment/list5'
stimuli5 = []

for stimulus in os.listdir(stimulus_folder5):
   if '.png' in stimulus:
      stimuli5.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json5 = json.dumps(stimuli5)

# Write the string to the file
with open('jspsych_parameters5.json', 'w') as file:
    file.write("let images5 = " + stimuli_json5)



stimulus_folder6 = r'/Users/samahabdelrahim/git-repos/complexity_wordlearning/experiment/list6'
stimuli6 = []

for stimulus in os.listdir(stimulus_folder6):
   if '.png' in stimulus:
      stimuli6.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json6 = json.dumps(stimuli6)

# Write the string to the file
with open('jspsych_parameters6.json', 'w') as file:
    file.write("let images6 = " + stimuli_json6)